package yieldstreet.challenges.concurrent;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;

public class CallbackToAsyncStuffRepository {
    
    private final CallbackStuffRepository callbackRepository;

    public CallbackToAsyncStuffRepository(CallbackStuffRepository callbackRepository) {
        this.callbackRepository = callbackRepository;
    }

    /**
     * Find some stuff by id, asynchronously. Hint: {@link CompletableFuture}
     * is your friend.
     *
     * @param id the stuff id
     * @return a completion stage for the stuff.
     */
    public CompletionStage<Stuff> findById(String id) {

        CompletableFuture<Stuff> completableFuture = new CompletableFuture<>();

        callbackRepository.findById(id,new StuffCallback() {
            @Override
            public void onSuccess(Stuff stuff) {
                completableFuture.complete(stuff);
            }

            @Override
            public void onError(Throwable throwable) {
                completableFuture.completeExceptionally(throwable);
            }
        });
        return  completableFuture;
    }
}