You are given a simple CSV file, payments.csv, with the following columns:
* user_id
* payment_amount
* payment_date

You need to make a table, PAYMENTS_BY_MONTH, with the following columns:

user_id
month_1_total_paid
month_2_total_paid
…
month_N_total_paid

For each user, the Month 1 total is the total amount they paid in the first month that they made payments. Month 2 payment is the total amount paid in the subsequent month. Month n payment is the total paid in the last month they made payments. The value of N will be the max such n value among all users. If no payments were made in a certain month after their first payment, then the value must be zero for that entry. For a given user, if n < N then all payments after month n will be zero.

Write code that will generate a CSV file containing the table PAYMENTS_BY_MONTH
