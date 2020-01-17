# CORS

For security reasons, browsers will block cross-origin requests unless the server opts-in using CORS headers. Browsers will also make extra __OPTIONS__ requests to check what HTTP headers and methods are allowed by the server. [Read more about CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

The `.withCredentials()` method enables the ability to send cookies from the origin, however only when `Access-Control-Allow-Origin` is _not_ a wildcard ("*"), and `Access-Control-Allow-Credentials` is "true".

```js
    request
      .get('https://api.example.com:4001/')
      .withCredentials()
      .then(res => {
        assert.equal(200, res.status);
        assert.equal('tobi', res.text);
      })
```
