# 基础用法

可以通过在 `request` 对象上调用适当的方法来发起请求，然后调用 `.then()` （或 `.end()` 或 [`await`](/basics/promise.html)） 发送请求。

例如一个简单的__GET__请求：

```js
request
  .get('/search')
  .then(res => {
     // res.body, res.headers, res.status
  })
  .catch(err => {
     // err.message, err.response
  });
```
HTTP 方法也可以作为字符串传递：

```js
request('GET', '/search').then(success, failure);
```

还支持老式的回调方式，但不建议使用。可以调用 `.end()` 来代替 `.then()`：

```js
request('GET', '/search').end(function(err, res){
  if (res.ok) {}
});
```

可以使用绝对 URL，在 Web 浏览器中，仅当服务器实现 [CORS](/advanced/cors.html) 时，绝对 URL 才起作用。

```js
request
  .get('https://example.com/search')
  .then(res => {

  });
```

__Node__ 客户端支持向 [Unix Domain Sockets](https://en.wikipedia.org/wiki/Unix_domain_socket) 发出请求：

```js
// pattern: https?+unix://SOCKET_PATH/REQUEST_PATH
//          Use `%2F` as `/` in SOCKET_PATH
try {
  const res = await request
    .get('http+unix://%2Fabsolute%2Fpath%2Fto%2Funix.sock/search');
  // res.body, res.headers, res.status
} catch(err) {
  // err.message, err.response
}
```

__DELETE__、__HEAD__、__PATCH__、__POST__ 和 __PUT__ 类的请求同样可以使用。

```js
request
  .head('/favicon.ico')
  .then(res => {

  });
```

__DELETE__ 请求也可以通过 `.del()` 的方式调用，以兼容旧的 IE。注意，是 `del` 不是 `delete`，因为 `delete`
是保留字段。

HTTP 方法默认为 __GET__，因此，下面的请求是一个有效的 __GET__ 请求：

```js
request('/search', (err, res) => {

});
```
