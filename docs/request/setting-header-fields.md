# 设置 Headers

Setting header fields is simple, invoke `.set()` with a field name and value:

```js
     request
       .get('/search')
       .set('API-Key', 'foobar')
       .set('Accept', 'application/json')
       .then(callback);
```

You may also pass an object to set several fields in a single call:

```js
     request
       .get('/search')
       .set({ 'API-Key': 'foobar', Accept: 'application/json' })
       .then(callback);
```
