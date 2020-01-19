# 设置 Headers

设置请求头的方法很简单，调用 `.set()` 传入字段名和值即可：

```js
 request
   .get('/search')
   .set('API-Key', 'foobar')
   .set('Accept', 'application/json')
   .then(callback);
```

同样你也可以直接传入 object 来设置请求头中的多个字段名：

```js
 request
   .get('/search')
   .set({ 'API-Key': 'foobar', Accept: 'application/json' })
   .then(callback);
```
