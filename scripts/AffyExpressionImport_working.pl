use warnings;
use strict;
use Data::Dumper::Simple;
use REST::Neo4p;
use REST::Neo4p::Batch;
use REST::Neo4p::Node;
use REST::Neo4p::Index;
use IO::File;
use PDL;

# Want to change to export to file instead of store in large array and do a dump at the end


$PDL::BIGPDL = 1;

$REST::Neo4p::Agent::RQ_RETRIES = 10;
$REST::Neo4p::Agent::RETRY_WAIT = 15;

REST::Neo4p->connect( "http://127.0.0.1:7979" );

my $index = "medicago_truncatula_3_5v5";

my $fh = new IO::File;
my $filename = 'MtGea_all_means_download_mtr_only.txt';
$fh->open("< MtGea_all_means_download_mtr_only.txt");

my $mainIdx = REST::Neo4p->get_index_by_name('main', 'node');

my $firstline = <$fh>;
chomp($firstline);
my @headers = split /\t/, $firstline;

my %header_nodes;

my %data;
my @probes;
my @genes_nodes;
my %probesets_to_genes;
my %genes_to_probesets;

# Get or create the experiment nodes
foreach my $header (@headers) {
	
	next if ($header =~ /probeset/i);
	
	($header_nodes{$header}) = $mainIdx->find_entries(id => $header);
	unless($header_nodes{$header}) {
		$header_nodes{$header} = REST::Neo4p::Node->new({id => $header});
		$mainIdx->add_entry($header_nodes{$header}, id => $header);
	}
}

	my $statement = 'START x=node:medicago_truncatula_3_5v5(id = {id})
		MATCH x-[:PROBESET_SINGLE_MATCH]-y
		RETURN y';

my @relations;

my $count = 0;

my $query = REST::Neo4p::Query->new($statement);

while (<$fh>) {
	chomp;
	
	$count++;
	
	my @values = split /\t/;
	my $probeset = shift(@values);
	# warn 'On ' . $probeset . ' count: ' . $count;
	push(@probes, $probeset);
	$data{$probeset} = \@values;

        $query = REST::Neo4p::Query->new($statement, {id => $probeset});

	# Do we have a single match
	if ($query->execute) {
		my $node = $query->fetch->[0];
		push(@genes_nodes, $node);
		
		if ($node) {
			my $geneid = $node->get_property("id");
			push (@{$probesets_to_genes{$probeset}}, $geneid);
			push(@{$genes_to_probesets{$geneid}}, $probeset);
			 
			foreach my $i (keys @values) {
				my $header = $headers[$i + 1];
				if (!$header_nodes{$header}) { die $header . " not found as a valid node!"; }
				push(@relations, [$node, $header_nodes{$header}, $values[$i]]);
			}
		}
	}

	delete($query->{_iterator});

}

my %completed; # No dupes

my $rels;

batch {
	foreach my $rel (@relations) {
		my $node = $rel->[0];

		my $other_node = $rel->[1];		

		unless ($completed{$node->id . ' ' . $other_node->id}) {
			$node->relate_to($other_node, 'EXPRESSED', { level => $rel->[2], source => $filename});
			$rels++;
		} 
		
		$completed{$node->id . ' ' . $other_node->id} = 1;
		
	}

	warn "Making $rels ....";

} 'keep_objs';
