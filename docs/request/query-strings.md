# Query 参数

`req.query(obj)` 方法用来在生成 query-string。

看下面这个例子：给 __POST__ 请求添加 `?format=json&dest=/login` query 参数。

```js
request
  .post('/')
  .query({ format: 'json' })
  .query({ dest: '/login' })
  .send({ post: 'data', here: 'wahoo' })
  .then(callback);
```

默认情况下，query 参数没有排序规则。但是可以通过 `req.sortQuery()` 来对 query
参数按字母顺序排序。另外，还可以给 `sortQuery` 传入一个排序函数
`req.sortQuery(myComparisonFn)`，这个排序函数接受 2 个参数，且返回值应该是 负数/0/正数 这样。

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
