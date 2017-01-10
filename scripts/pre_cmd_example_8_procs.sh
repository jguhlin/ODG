rm db_scripts/*; lein run create-scripts --split-jobs 8 --split-jobs-cmd "pbsdsh -n [N]"
