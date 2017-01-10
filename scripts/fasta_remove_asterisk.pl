use Bio::SeqIO;

$in  = Bio::SeqIO->new(-file => $ARGV[0],
                       -format => 'Fasta');
$out = Bio::SeqIO->new(-file => ">" . $ARGV[1],
                       -format => 'Fasta');

while ( my $seq = $in->next_seq() ) {
	my $new_seq = $seq->seq();
	$new_seq =~ s/\Q*\E$//;
	next if ($new_seq =~ /\Q*\E/); # Skip this one if it still has an * in it, interproscan can not handle asterisks
	$seq->seq($new_seq);
	$out->write_seq($seq);
}
