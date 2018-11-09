package bank;

import java.util.List;

public class BankAccountOwner {
    private String name;

    private List<BankAccount> bankAccounts;

    public BankAccountOwner(String name, List<BankAccount> bankAccounts) {
        this.name = name;
        this.bankAccounts = bankAccounts;
    }

    public String getName() {
        return this.name;
    }

    public List<BankAccount> getBankAccounts() {
        return this.bankAccounts;
    }
}
