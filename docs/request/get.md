# GET 请求

当一个 __GET__ 请求使用 `.query()` 方法传入一个 Object 对象时，那么这个 Object 参数会被转化成一个
query-string。

下面这个例子中的多个 query 参数得到的 query-string 是
`/search?query=Manny&range=1..5&order=desc`。

query 参数可以多次传入：

```js
 request
   .get('/search')
   .query({ query: 'Manny' })
   .query({ range: '1..5' })
   .query({ order: 'desc' })
   .then(res => {

   });
```

或者，可以直接传入一个完整的 object 参数：

```js
request
  .get('/search')
  .query({ query: 'Manny', range: '1..5', order: 'desc' })
  .then(res => {

  });
```

`.query()` 方法同样接受字符串类型的参数：

```js
request
  .get('/querystring')
  .query('search=Manny&range=1..5')
  .then(res => {

  });
```

同样，这样多个 query 传入也可以：

```js
request
  .get('/querystring')
  .query('search=Manny')
  .query('range=1..5')
  .then(res => {

  });
```
