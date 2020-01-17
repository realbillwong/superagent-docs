# Retry

When given the `.retry()` method, SuperAgent will automatically retry requests, if they fail in a way that is transient or could be due to a flaky Internet connection.

This method has two optional arguments: number of retries (default 1) and a callback. It calls `callback(err, res)` before each retry. The callback may return `true`/`false` to control whether the request sould be retried (but the maximum number of retries is always applied).

```js
     request
       .get('https://example.com/search')
       .retry(2) // or:
       .retry(2, callback)
       .then(finished);
       .catch(failed);
```

Use `.retry()` only with requests that are *idempotent* (i.e. multiple requests reaching the server won't cause undesirable side effects like duplicate purchases).
