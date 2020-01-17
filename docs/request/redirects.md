# Redirects

By default up to 5 redirects will be followed, however you may specify this with the `res.redirects(n)` method:

```js
    const response = await request.get('/some.png').redirects(2);
```

Redirects exceeding the limit are treated as errors. Use `.ok(res => res.status < 400)` to read them as successful responses.
