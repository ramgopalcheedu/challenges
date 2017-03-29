# CompletionStage and Optional

Given:

```java
import java.util.Optional;
import java.util.concurrent.CompletionStage;

public interface StuffRepository {

    /**
     * Looks for existing stuff matching the given payload and returns the
     * existing stuff id.
     * 
     * @param payload the stuff payload.
     * @return a completion stage for an optional with the stuff id. It's
     *         completed with an empty optional if no stuff is found.
     */
    CompletionStage<Optional<String>> findStuff(Object payload);

    /**
     * Creates new stuff with the given payload and returns the id for the
     * newly created stuff.
     * 
     * @param payload the stuff payload.
     * @return a completion stage for the newly created stuff id.
     */
    CompletionStage<String> createStuff(Object payload);

    /**
     * Finds existing stuff matching the given payload, or creates the stuff
     * if it's not found.
     * 
     * @param payload the stuff payload.
     * @return a completion stage with the id for the existing or newly created stuff.
     */
    default CompletionStage<String> findOrCreateStuff(Object payload) {
        // return ???
    }
    
}
```

Provide an implementation for `findOrCreateStuff` in terms of `findStuff` and `createStuff`. Bonus points for doing this in a single statement.
