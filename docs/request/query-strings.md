# Query 参数

`req.query(obj)` is a method which may be used to build up a query-string. For example populating `?format=json&dest=/login` on a __POST__:

```js
    request
      .post('/')
      .query({ format: 'json' })
      .query({ dest: '/login' })
      .send({ post: 'data', here: 'wahoo' })
      .then(callback);
```

By default the query string is not assembled in any particular order. An asciibetically-sorted query string can be enabled with `req.sortQuery()`. You may also provide a custom sorting comparison function with `req.sortQuery(myComparisonFn)`. The comparison function should take 2 arguments and return a negative/zero/positive integer.

```js
 // default order
 request.get('/user')
   .query('name=Nick')
   .query('search=Manny')
   .sortQuery()
   .then(callback)

 // customized sort function
 request.get('/user')
   .query('name=Nick')
   .query('search=Manny')
   .sortQuery((a, b) => a.length - b.length)
   .then(callback)
```
