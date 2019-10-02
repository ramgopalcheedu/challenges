Here are two questions. Please answer them completely.

## Question 1
* table A, column X has n rows with value J
* table B, column Y has m rows with value J

If you join A and B on X and Y, how many rows will the value J appear in, assuming both m and n are greater than zero? Is your answer affected by join type? Why or why not? What if m and n are allowed to be zero?

(Bonus) Talk about some issues that can arise if both m and n are greater than 1. If you saw a colleague's SQL query and this type of join was in it, where both m and n are greater than 1, what would you ask?


## Question 2
 Of the users who had a payment over $1000, we want to know when they last updated their profile. Your analyst has come up with the following SQL for this:

```
SELECT
	ID,
	UPDATE_DT
FROM USER
WHERE ID IN (
	SELECT DISTINCT USER_ID FROM
	PAYMENTS
	WHERE PAYMENT_AMOUNT > 1000
)
```

Is this code efficient? If not, what can be done to make it more efficient? What would you explain to your analyst?
