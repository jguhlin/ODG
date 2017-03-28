# ODG: Omics Database Generator

## Introduction

Welcome. This project is in near-publication stage. Please follow this project for announcements or e-mail me (guhli007 at umn.edu) and ask to be mailed when the initial release is out.

## What this does

This program takes genome files and output from various programs to create a graph database for querying genomic data across domains. This program is stable and database structure is well defined.

Feel free to ask questions or make suggestions.

## Usage

Download and run appropriate programs to create the output. Please see the documentation to see what types of files are necessary.

### All Platforms
Download and extract one of the available releases.

Place files for each of your genomes in the data/ directory, one directory for each genome and genome version, or accession (strain). For Example:

    data/
         Arabidopsis_thaliana_10/
             assembly.fasta
             genes.gff3
             proteins.fasta
             ipscan_results.tsv
         Oryza_sativa_2/
             assembly.fasta
             genes.gff3
             proteins.fasta
             ipscan_results.tsv
         E_coli_1/
             assembly.fasta
             genes.gff3
             proteins.fasta
             ipscan_results.tsv

         
### For Windows
To begin the configuration program double click "odg-config.bat" and set your browser to http://localhost:33333 after the server has started, usually a few minutes after starting.
To compile the database, once all intervening software has been run you can run "odg-generate.bat" and wait, usually a half hour to a few hours depending on the size of your dataset.
To run the query server, run "odg-query.bat" and point your web browser to http://localhost:6789

### For *nix Systems
To begin the configuration program run "./odg-config.sh" and set your browser to http://localhost:33333 after the server has started, usually a few minutes after starting.
To compile the database, once all intervening software has been run you can run "./odg-generate.sh" and wait, usually a half hour to a few hours depending on the size of your dataset.
To run the query server, run "./odg-query.sh" and point your web browser to http://localhost:6789

## For More Information
Please see the user guide, available [here](https://github.com/jguhlin/ODG/blob/master/doc/ODG%20User%20Guide.pdf)

## Releases

ODG is offered as 2 releases, and should work on Windows, Mac, and *nix Systems. *nix systems are preferred, but ODG is developed and tested primarily on Windows. 

### Requirements

Java 1.8 is required. You likely have Java installed on your system. If not you may download it at http://www.oracle.com/technetwork/java/javase/downloads/ 
ODG is expected to work with, but not tested on, OpenJDK versions equivalent to Java 1.8. ODG is memory-intensive, at least 8GB is recommended.

### Test-drive ODG
This version contains a completed database built with publicly available data and compiled information for Arabidopsis thaliana, Glycine max, Medicago truncatula, and Phaseolus vulgaris. It is provided here to provide a way for you to test out the features of ODG and see if it is right for you.
    ODG.v1.0.0.test_drive.zip  

### Empty ODG
This version contains no test data and is ready to be populated with your genomes and data of choice. 
    [ODG.v1.0.0.release.zip](https://github.com/jguhlin/ODG/releases/download/1.0.0-release/odg-release.zip)

## License
Copyright © 2017 Joseph Guhlin

