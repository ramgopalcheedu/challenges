package bank;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Transaction {
    private LocalDate date;

    private BigDecimal amount;

    public Transaction(LocalDate date, BigDecimal amount) {
        this.date = date;
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public BigDecimal getAmount() {
        return amount;
    }
}
