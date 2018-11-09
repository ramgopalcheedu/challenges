package bank;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;

public class Repository {
    private static List<Transaction> owner1Transactions = Arrays.asList(
        new Transaction(LocalDate.of(2019, 1, 1), BigDecimal.valueOf(1000)),
        new Transaction(LocalDate.of(2019, 1, 2), BigDecimal.valueOf(1000)),
        new Transaction(LocalDate.of(2019, 1, 2), BigDecimal.valueOf(-100)),
        new Transaction(LocalDate.of(2019, 1, 5), BigDecimal.valueOf(-300)),
        new Transaction(LocalDate.of(2019, 1, 10), BigDecimal.valueOf(-400)));

    private static BankAccountOwner owner1 = new BankAccountOwner("Owner One",
        Arrays.asList(new BankAccount("1", "1", owner1Transactions), new BankAccount("1", "1", owner1Transactions)));

    private static List<Transaction> owner2Transactions = Arrays.asList(
        new Transaction(LocalDate.of(2019, 1, 1), BigDecimal.valueOf(5000)),
        new Transaction(LocalDate.of(2019, 1, 2), BigDecimal.valueOf(-1000)),
        new Transaction(LocalDate.of(2019, 1, 3), BigDecimal.valueOf(100)),
        new Transaction(LocalDate.of(2019, 1, 7), BigDecimal.valueOf(-500)),
        new Transaction(LocalDate.of(2019, 1, 12), BigDecimal.valueOf(-700)));

    private static BankAccountOwner owner2 = new BankAccountOwner("Owner Two",
        Arrays.asList(new BankAccount("1", "2", owner2Transactions)));

    private static List<Transaction> owner3Transactions = Arrays.asList(
        new Transaction(LocalDate.of(2019, 1, 1), BigDecimal.valueOf(10000)),
        new Transaction(LocalDate.of(2019, 1, 7), BigDecimal.valueOf(-10000)),
        new Transaction(LocalDate.of(2019, 1, 12), BigDecimal.valueOf(100)),
        new Transaction(LocalDate.of(2019, 1, 13), BigDecimal.valueOf(300)),
        new Transaction(LocalDate.of(2019, 1, 16), BigDecimal.valueOf(-400)));

    private static BankAccountOwner owner3 = new BankAccountOwner("Owner Three",
        Arrays.asList(new BankAccount("1", "3", owner3Transactions)));

    private static List<Transaction> owner4Transactions = Arrays.asList(
        new Transaction(LocalDate.of(2019, 1, 8), BigDecimal.valueOf(9000)),
        new Transaction(LocalDate.of(2019, 1, 17), BigDecimal.valueOf(5500)),
        new Transaction(LocalDate.of(2019, 1, 18), BigDecimal.valueOf(-500)),
        new Transaction(LocalDate.of(2019, 1, 21), BigDecimal.valueOf(-9000)),
        new Transaction(LocalDate.of(2019, 1, 28), BigDecimal.valueOf(-950)));

    private static BankAccountOwner owner4 = new BankAccountOwner("Owner Four",
        Arrays.asList(new BankAccount("1", "4", owner1Transactions)));

    private static final List<BankAccountOwner> bankAccountOwners = Arrays.asList(owner1, owner2, owner3, owner4);

    public static CompletionStage<BankAccountOwner> findOwnerByName(String name) {
        return CompletableFuture.supplyAsync(() -> bankAccountOwners.stream()
            .filter(bao -> bao.getName().equals(name))
            .findFirst().orElse(null));
    }
}
