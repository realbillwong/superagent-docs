# CORS

出于安全原因，除非服务器开启了 CORS，否则浏览器将阻止跨域请求。浏览器还将发出额外的 __OPTIONS__ 请求，以检查服务器允许哪些 HTTP 标头和方法。[阅读有关CORS的更多信息](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)。

`.withCredentials()` 方法启用从源发送 cookie 的功能，但是仅当服务器端的 `Access-Control-Allow-Origin` 不是 `*` 通配符并且 `Access-Control-Allow-Credentials` 为 `true` 是才有效。

```js
request
  .get('https://api.example.com:4001/')
  .withCredentials()
  .then(res => {
    assert.equal(200, res.status);
    assert.equal('tobi', res.text);
  })
```
