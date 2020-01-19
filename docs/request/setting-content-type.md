# 设置 `Content-Type`

设置 `Content-Type` 的方法很简单，调用 `.set()` 方法即可：

```js
request.post('/user')
  .set('Content-Type', 'application/json')
```

另外，还有一种更简单的方法：`.type()`。这个方法既可以指定完整的规范化 MIME 类型，比如
`type/subtype`，或者也可以直接用文件后缀的形式，比如 "xml", "json", "png" 等等。

```js
 request.post('/user')
   .type('application/json')

 request.post('/user')
   .type('json')

 request.post('/user')
   .type('png')
```
