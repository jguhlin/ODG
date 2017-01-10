use Bio::SeqIO;

$in  = Bio::SeqIO->new(-file => $ARGV[0],
                       -format => 'Fasta');
$tmpout  = Bio::SeqIO->new(-file => ">" . $ARGV[0] . "-tmp",
                       -format => 'Fasta');
#open (my $out, ">" $ARGV[1]);

my $targetp_bin = "/home/youngn/shared/software/targetp-1.1/targetp";

my $n = 0;
my $at_a_time = 1000;
while ( my $seq = $in->next_seq() ) {
	my $new_seq = $seq->seq();
	$new_seq =~ s/\Q*\E$//;
	next if ($new_seq =~ /\Q*\E/); # Skip this one if it still has an * in it, will not work reliably
	$seq->seq($new_seq);
	$tmpout->write_seq($seq);
	
	$n++;
	if ($n == 1000) {
		undef($tmpout);
		print "Executing...\n";
		my $cmd = $targetp_bin . " -c -P " . $ARGV[0] . "-tmp" . " >> " . $ARGV[1];
		print $cmd . "\n";
		system($cmd);
		$tmpout  = Bio::SeqIO->new(-file => ">" . $ARGV[0] . "-tmp",
        		                   -format => 'Fasta');
		$n = 0;	
	}
	
}

my $cmd = $targetp_bin . " -c -P " . $ARGV[0] . "-tmp" . ">>" . $ARGV[1];
system($cmd);

