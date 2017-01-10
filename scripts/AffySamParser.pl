use warnings;
use strict;
use Bio::SeqIO;
use Data::Dumper::Simple;
use REST::Neo4p;
use REST::Neo4p::Batch;
use REST::Neo4p::Node;
use REST::Neo4p::Index;
use List::MoreUtils qw(uniq);
use Bio::DB::Sam;

# Expects
# perl AffySamParser.pl species version sam_file fasta_reference_file

REST::Neo4p->connect('http://mt2.cfans.umn.edu:8181');

parse($ARGV[0], $ARGV[1], $ARGV[2], $ARGV[3]);

sub parse {
	my ($species, $version, $sam_file, $fasta_ref) = @_;
	
	$self->{file} = $sam_file;
	
	$self->{ver_index} = REST::Neo4p->get_index_by_name(getSpeciesVersionIndex($species, $version), 'node');
	$self->{finished} = {};
	
	my %probes;
	my %probe_matches;
	my %probe_nodes;
	my %targets;
	my @probes;
	
	# Let's parse through the SAM file
	warn $sam_file;
	my $sam = Bio::DB::Sam->new(-bam => $sam_file, -fasta => $fasta_ref, -autoIndex => 1); 

	my @alignments = $sam->features;

	# Make the nodes for the probesets
	map { push(@probes, (split(/:/, $_->query->name))[2]) } @alignments;
	batch {
		map { $probe_nodes{$_} = REST::Neo4p::Node->new( {
				"id" => $_,
				"source" => $sam_file,
				"note" => "Automatically created during AffySamParser",
				"type" => "affymetrix_probeset",
			}); } uniq @probes;
	} 'keep_objs';
	
	batch {
		map { print "Indexing $_ \n"; $self->{ver_index}->add_entry($probe_nodes{$_}, "id" => $_); } uniq @probes;
	} 'keep_objs';
	
	foreach my $probe (keys %probe_nodes) {
		$probe_nodes{$probe} = $probe_nodes{$probe}->add_labels("AffyProbe");
		
	}
	
	foreach my $aln (@alignments) {
		my $probeset = (split /:/, $aln->query->name)[2];
		# Only fwd strands, alignment length > 20	 
		 if ($aln->length > 20 && $aln->strand == 1) {
		 	my $target_name = substr($aln->seq_id, 0, -2); # Remove the last 2 characters, so that transcripts will merge into one
		 	push(@{$targets{$target_name}{$probeset}{matches}}, $aln->query->name);
		 }
	}

	# Go through and find all the matches that match at least 8 targets
	foreach my $target (keys %targets) {
		foreach my $probeset (keys %{$targets{$target}}) {
			if (scalar uniq $targets{$target}{$probeset}{matches} >= 8) {
				$probes{$probeset} = 1;
				push (@{$probe_matches{$probeset}{matches}}, $target);
			}
		}
	}
	
	# Now determine if there is only one match for each probeset
	
	my $uniq = 0;
	
	foreach my $probeset (keys %probe_matches) {
		my @matches = uniq $probe_matches{$probeset}{matches};
		if (scalar @matches == 1) {
			$uniq++;
			my $gene_node = ($self->{ver_index}->find_entries("id" => $probe_matches{$probeset}{matches}[0]))[0];
			print "Relating $probeset to " . $probe_matches{$probeset}{matches}[0] . "\n";
			$probe_nodes{$probeset}->relate_to($gene_node, "PROBESET_SINGLE_MATCH") if $gene_node;
			warn "Nothing found for " . $probe_matches{$probeset}{matches}[0] if !$gene_node;
		} elsif (scalar @matches > 1) {
			foreach my $match (@matches) {
				my $gene_node = ($self->{ver_index}->find_entries("id" => $match))[0];
				print "Relating $probeset to " . $match . "\n";
				$probe_nodes{$probeset}->relate_to($gene_node, "PROBESET_MULTIPLE_MATCH") if $gene_node;
				warn "Nothing found for " . $probe_matches{$probeset}{matches}[0] if !$gene_node;
			}
		}
	}
	
	print "Unique hits: $uniq";
	
#	my $probeset = (split /:/, $aln->query->name)[2];
 #	$probes{$probeset} = 1;
 #	push(@{$probe_matches{$probeset}}, $aln->seq_id);

}

# All this can move to a library at some point in the future...

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
