package bank;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.concurrent.CompletionStage;

public class ATM {
    public static CompletionStage<BigDecimal> getBalanceForBankAccount(String owner, String routingNumber, String accountNumber) {
        return Repository.findOwnerByName(owner).thenApply(bankAccountOwner ->
            bankAccountOwner.getBankAccounts().stream().parallel()
                .filter(ba -> ba.getRoutingNumber().equals(routingNumber) && ba.getAccountNumber().equals(accountNumber))
                .map(ba -> {
                    BigDecimal transactionBalance = BigDecimal.ZERO;
                    ba.getTransactions().parallelStream().forEach(t -> transactionBalance.add(t.getAmount()));
                    return transactionBalance;
                })
                .findFirst().orElse(null))
                .thenApply(result -> result.setScale(2, RoundingMode.DOWN));
    }
}
