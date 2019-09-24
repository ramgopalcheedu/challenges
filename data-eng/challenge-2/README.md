You are given access to an FTP site site and there is just one file on that site called data.csv that is full of important records that your team needs.

When you pull the file, you are given its last_modified_dt and this file is updated on irregular intervals though never more often than daily

The table in data.csv simply has the following columns:
data1
data2
data3
…
dataN

Your team wants a table, FDATA, with the following columns:
added_dt
data1
data2
…
dataN

They want the added_dt to be the last_modified_dt when the record first appeared in the CSV. A record is considered new if there is no row that exactly matches it in a previous version of the file.

##Part One
Write code that generates the initial version of FDATA
from what's in data.csv right now. No need to write code
that does the download. Assume data.csv is available locally

##Part Two
Assume data.csv is available locally but has been updated.
Write code that updates FDATA with the new records
  that are now in data.csv

##Part Three (Bonus)
Write a few sentences about how you would orchestrate
the implementation of a pipeline that does
Part Two on a regular cadence
