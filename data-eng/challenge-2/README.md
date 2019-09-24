

You are given access to an FTP site site and there is just one file on that site called _data.csv_ that is full of important records that your team needs.

When you pull the file, you are given its *last_modified_dt* and this file is updated on irregular intervals though never more often than daily

The table in _data.csv_ simply has the following columns:
```
data1
data2
data3
…
dataN
```

Your team wants a table, _FDATA_, with the following columns:
```
added_dt
data1
data2
…
dataN
```

They want the *added_dt* to be the *last_modified_dt* when the record first appeared in the CSV. A record is considered new if there is no row that exactly matches it in a previous version of the file.

## Part One
Write code that generates the initial version of _FDATA_
from what's in _data.csv_ right now. Do not write code
that does the download. Assume _data.csv_ is available locally

## Part Two
Assume _FDATA_ has been created and is available via a simple SQL query.
Assume _data.csv_ is available locally but has changed since the last time
_FDATA_ was generated.
Write code that updates _FDATA_ with the new records
  that are now in _data.csv_


## Part Three (Bonus)
Write a few sentences about the pipeline you would implement
to download _data.csv_ and update _FDATA_ on a regular basis.


## Important Notes
* _FDATA_ needs to have at least the aforementioned columns, but it can have more columns than that if it helps with the engineering
* If this challenge is taking too long or your code seems very inefficient,
  then email us and we'll give you a key hint
