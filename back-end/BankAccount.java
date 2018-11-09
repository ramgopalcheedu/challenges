package bank;

import java.util.List;

public class BankAccount {
    private String routingNumber;

    private String accountNumber;

    private List<Transaction> transactions;

    public BankAccount(String routingNumber, String accountNumber, List<Transaction> transactions) {
        this.routingNumber = routingNumber;
        this.accountNumber = accountNumber;
        this.transactions = transactions;
    }

    public String getRoutingNumber() {
        return this.routingNumber;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }
}
