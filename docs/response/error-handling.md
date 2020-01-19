# 错误处理

所有请求的响应 callback 会传入两个参数：error 和 response。

如果没有发生错误，那么第一个参数会为 null：

```js
request
 .post('/upload')
 .attach('image', 'path/to/tobi.png')
 .then(res => {

 });
```

如果发生了错误，那么你用如下方式监听错误：

```js
request
  .post('/upload')
  .attach('image', 'path/to/tobi.png')
  .on('error', handle)
  .then(res => {

  });
```

**注意：SuperAgent 默认会将 4xx 和 5xx 以及未处理的 3xx 认定为错误。**

比如，如果你得到的是 `304 Not modified`、`403 Forbidden`、`500 Internal server error`
响应，这些状态信息可以在`err.status` 中查看。

这些情况下的错误还会包含 `err.response` 属性，其内容就是 [Response 属性](/response/properties.html) 中的全部属性。

SuperAgent 除了用这种方式处理常见 HTTP 错误，同时仍允许围绕特定错误条件的自定义逻辑。

网络失败，请求超时，还有其他一些错误会包含 `err.status` 或者 `err.response` 字段。

如果你想单独处理 404 错误或者其他具体某个错误响应，你可以检查 `err.status` 属性。当一个 HTTP 错误（4xx 或者 5xx）发生时，`res.error` 属性是一个`Error` 对象，你可以做一些检查：

```js
if (err && err.status === 404) {
  alert('oh no ' + res.body.message);
}
else if (err) {
  // all other error types we handle generically
}
```

另外，你可以用 `.ok(callback)` 方法来决定一个请求是否是失败了。这个地方的 callback 函数接收 response 为参数，并且在请求可以被认为成功时返回 `true`。

```js
request.get('/404')
  .ok(res => res.status < 500)
  .then(response => {
    // 此时 404 的响应会被当成成功的请求
  })
```
