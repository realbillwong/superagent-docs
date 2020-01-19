# 设置 Accept

跟用 `.type()` 方法设置 Content-Type 的方法类似，你可以用 `.accept()` 方法来设置请求的 `Accpet`
请求头。你既可以指定完整的规范化 MIME 类型，比如
`type/subtype`，或者也可以直接用文件后缀的形式，比如 "xml", "json", "png" 等等。

```js
 request.get('/user')
   .accept('application/json')

 request.get('/user')
   .accept('json')

 request.post('/user')
   .accept('png')
```
