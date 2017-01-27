SET ORIGINAL=%CD%

COPY db_scripts\makeblastdbs.sh db_scripts\makeblastdbs.bat
COPY db_scripts\blastp.sh db_scripts\blastp.bat
COPY db_scripts\blastn.sh db_scripts\blastn.bat

call "db_scripts\makeblastdbs.bat"

CD %ORIGINAL%
call "db_scripts\blastp.bat"

CD %ORIGINAL%
call "db_scripts\blastn.bat"