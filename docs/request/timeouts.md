# Timeout

请求有时候会因为网络异常或者服务端一些异常情况导致很长时间没有响应，这时候请求会一直处于 `Pending`
的状态。

* `req.timeout({deadline: ms})` 或者 `req.timeout(ms)` （`ms` 应该是大于 0 的毫秒）设置整个请求的超时时间（包括全部上传，重定向，服务端处理时间，响应结果完全下载时间）。如果 response 没有在这个时间内完成，那么这个请求会被取消。

* `req.timeout({response: ms})` 设置接收到服务端响应的第一个字段的超时时间。对于需要多久时间才能得到完整的请求结果是不算在这个超时时间内的。 Response 超时时间应该比实际请求响应时间长一些，应为还需要考虑到 DNS 查询，TCP/IP 和 TSL 连接建立，上传请求数据等等时间。

当你准备使用 timeouts 这个方法时，`deadline` 和 `response` 这两个参数应该同时使用。用较短的 response
超时时间来快速处理无响应的请求，较长的 deadline 超时时间来给较慢的网络处理请求。

注意，这两个超时时间都包含 **上传**
请求内容的时间，如果在请求时需要上传文件的话，那么设置稍微长一些的超时时间。

```js
request
  .get('/big-file?network=slow')
  .timeout({
    response: 5000,  // 接收到服务端响应时间不超过 5 秒
    deadline: 60000, // 整个请求的超时时间为 1 分钟
  })
  .then(res => {
      /* 正常响应 */
    }, err => {
      if (err.timeout) { /* timed out! */ } else { /* other error */ }
  });
```

请求超时的错误中包含一个 `.timeout` 属性，可以通过 `err.timeout` 取得。
