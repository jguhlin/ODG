use warnings;
use strict;
use Bio::SeqIO;
use Data::Dumper::Simple;
use REST::Neo4p;
use REST::Neo4p::Batch;
use REST::Neo4p::Node;
use REST::Neo4p::Index;

REST::Neo4p->connect('http://localhost:8181');

parse($ARGV[0], $ARGV[1], $ARGV[2], $ARGV[3]);

my $species;
my $version;
my $flst_fasta;
my $blastn_filename;
my $ver_index;
my %finished = {};

sub parse {
	($species, $version, $flst_fasta, $blastn_filename) = @_;
	
	$ver_index = REST::Neo4p->get_index_by_name(getSpeciesVersionIndex($species, $version), 'node');
	
	my %queries;
	my %data;
	my %mutant_nodes;
	
	# Create a new node for each of the FLST entries with the sequence data stored as well...
	
	my $fh = IO::File->new( $flst_fasta, 'r' );

	my $seqio = Bio::SeqIO->new( '-fh' => $fh, '-format' => 'Fasta' );

	print "First batch...\n";
	
	batch {
	while ( my $seq = $seqio->next_seq ) {
		my $location = $seq->id;

		$mutant_nodes{$seq->id} = REST::Neo4p::Node->new( {
				"species" => $species,
				"version" => $version,
				"id" => $seq->id,
				"source" => $flst_fasta,
				"note" => "Automatically created during FlstBlastnParser",
				"type" => "FLST Mutant",
				"note" => $flst_fasta
			});
			
			$ver_index->add_entry($mutant_nodes{$seq->id}, "id" => $seq->id);
	}
	} 'keep_objs';

	print "Batch completed...\n";

	
	open my $file, "<", $blastn_filename;

	# Get the best FLST blastn matches...
	while (<$file>) {
		my ($queryid, $subjectid, $pctidentity, $alignment_length, $mismatches, $gap_opens, $query_start, $query_end, $subject_start, $subject_end, $evalue, $bit_score, $qlen, $slen) = split /\t/;
		my $coverage = ($alignment_length/$qlen)*100;
		if ($coverage > 80 && $pctidentity >= 92) {
			$queries{$queryid}++;
			push(@{$data{$queryid}}, [$queryid, $subjectid, $pctidentity, $alignment_length, $mismatches, $gap_opens, $query_start, $query_end, $subject_start, $subject_end, $evalue, $bit_score, $qlen, $slen]);
		}
	}

	close $file;

	print "Working on final add..\n";

	foreach my $queryid (keys %queries) {
		if ($queries{$queryid} == 1) {
			# If there is just 1 hit we can go ahead and store it...
			
			# print FILE (join "\t", @{$data{$queryid}[0]});
			# $output{$queryid} = $data{$queryid}[0];

			my @blastresult = @{$data{$queryid}[0]};
			possibleInsertionSite($mutant_nodes{$queryid}, determineChr($blastresult[1]), $blastresult[8], $blastresult[9], $blastresult[6], $blastresult[7]);

		} else {
			my @sorted = sort { $a->[11] <=> $b->[11] } @{$data{$queryid}};
			
			# Check for e-value ties...
			my $highest = $sorted[0]->[11];
		
			my @tosort = @sorted;
			@sorted = ();
		
			foreach my $line (@tosort) {
				if ($line->[11] == $highest) {
					push(@sorted, $line);
				}
			}

			if (scalar @sorted == 0) {
				@sorted = @tosort;
			}
			
			# Ignore tie-breakers, just make sure to list that in the UI..
			foreach my $blastresult (@sorted) {
				my @blastresult = @{$blastresult};
				possibleInsertionSite($mutant_nodes{$queryid}, determineChr($blastresult[1]), $blastresult[8], $blastresult[9], $blastresult[6], $blastresult[7]);
			}
			# warn Dumper(%mutant_nodes);			
			# warn Dumper($queryid);
		}
	}
}

sub possibleInsertionSite {
	my ($mutant_node, $chr, $start, $end, $qstart, $qend) = @_;
	my $starthash = getChrHash($chr, $end);
	my $endhash = getChrHash($chr, $end);
	my @rels = ();

	if ($starthash eq $endhash) { # Only need 1 relationship then
		push(@rels, $starthash);
	} else {
		push(@rels, $starthash);
		push(@rels, $endhash);
	}

	foreach my $hash (@rels) {
	print "Relating " . $mutant_node->get_property("id") . " to " . $hash->get_property("id") . "\n";
	unless ($finished{$mutant_node->get_property("id") . '--' . $hash->get_property("id")}) {

		$hash->relate_to($mutant_node, "POSSIBLE_INSERTION", {
			"species" => $species,
			"version" => $version,
			"sstart" => $start,
			"send" => $end,
			"qstart" => $qstart,
			"qend" => $qend,
			"source" => $flst_fasta,
			"reference" => $flst_fasta
		});
		
		$finished{$mutant_node->get_property("id") . '--' . $hash->get_property("id")} = 1;

	}

	}
}

# All this can move to a library at some point in the future...

sub getChrHash {
	my ($chr, $current_loc, $species, $ver) = @_;
	my $hash = 'chr' . $chr . ":" . int($current_loc/100000)*100000;
	
	my @nodes = $ver_index->find_entries("id" => $hash);
	my $node;
	if (@nodes > 1) {
		warn "Too many entries found for $hash - Only using the first";
		$node = $nodes[0];
	} elsif (@nodes == 0) {
		# No node found, we need to create one(and siblings)
		$node = REST::Neo4p::Node->new( {
				"species" => $species,
				"version" => $version,
				"id" => $hash,
				"source" => $flst_fasta,
				"note" => "Automatically created during FlstBlastnParser",
				"type" => "landmark-hash"
			});
		
		my $uphash = 'chr' . $chr . ":" . (int($current_loc/100000)-1)*100000;
		my $downhash = 'chr' . $chr . ":" . (int($current_loc/100000)+1)*100000;
		my ($upnode, $downnode);
		
		my @results = $ver_index->find_entries("id" => $uphash);
		if (@results == 0) {
			$upnode = REST::Neo4p::Node->new( {
				"species" => $species,
				"version" => $version,
				"id" => $hash,
				"source" => $flst_fasta,
				"note" => "Automatically created during FlstBlastnParser",
				"type" => "landmark-hash"
			});
			$node->relate_to($upnode, "NEXT_TO");
		} else {
			$upnode = $results[0];
		} 
		
		@results = $ver_index->find_entries("id" => $downhash);
		if (@results == 0) {
			$downnode = REST::Neo4p::Node->new( {
				"species" => $species,
				"version" => $version,
				"id" => $hash,
				"source" => $flst_fasta,
				"note" => "Automatically created during FlstBlastnParser",
				"type" => "landmark-hash"
			});
			$node->relate_to($downnode, "NEXT_TO");
		} else {
			$downnode = $results[0];
		}
		
		my @rels = $node->get_relationships();
		my $count = 0;
		my @next_to_rels;
		foreach my $rel (@rels) {
			if ($rel->type() eq 'NEXT_TO') {
				$count++;
				push(@next_to_rels, $rel);
			}
		}
		
		my ($upconn, $downconn);
		
		# Make sure all are connected...
		foreach my $rel (@next_to_rels) {
			unless ($upnode == $rel->start_node || $upnode == $rel->end_node) {
				$upconn = 1;
			}
				
			unless ($downnode == $rel->end_node || $downnode == $rel->start_node) {
				$downconn = 1;
			}
		}
		
		$node->relate_to($upnode, "NEXT_TO") if !$upconn;
		$node->relate_to($downnode, "NEXT_TO") if !$downconn;
		
	} else {
		$node = $nodes[0];
	}
	
	return($node);
	
}

sub determineChr {
	my ($possible_chr) = @_;
	my $chr;
	
	if ($possible_chr =~ /\d\d\d/) {
		return($possible_chr); # If more than 3 digits, return...
	}
	
	$possible_chr =~ /0(\d)/; # Get the Chr with a 0 in front
	$chr = $1;
	
	if (!$chr) {
		$possible_chr =~ /(\d)/; # Get the Chr number
		$chr = $1;
	}
	
	return($chr);
}

sub _strHandler {
	my $string = shift;
	$string = lc($string);
	$string =~ s/\n//g; # Remove newlines (doubtful that any would show, but let's just be safe)
	$string =~ s/[\s\-\.]+/_/g; # Change spaces to _
	return $string;
}

sub getSpeciesVersionIndex {
	my ($species, $version) = map {_strHandler($_)} @_;
	
	return($species . "_" . $version);
}


1;
