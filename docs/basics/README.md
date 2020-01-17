# 基础用法

A request can be initiated by invoking the appropriate method on the `request` object, then calling `.then()` (or `.end()` [or `await`](#promise-and-generator-support)) to send the request. For example a simple __GET__ request:

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

HTTP method may also be passed as a string:

```js
    request('GET', '/search').then(success, failure);
```

Old-style callbacks are also supported, but not recommended. *Instead of* `.then()` you can call `.end()`:

```js
    request('GET', '/search').end(function(err, res){
      if (res.ok) {}
    });
```

Absolute URLs can be used. In web browsers absolute URLs work only if the server implements [CORS](#cors).

```js
     request
       .get('https://example.com/search')
       .then(res => {

       });
```

The __Node__ client supports making requests to [Unix Domain Sockets](https://en.wikipedia.org/wiki/Unix_domain_socket):

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

__DELETE__, __HEAD__, __PATCH__, __POST__, and __PUT__ requests can also be used, simply change the method name:

```js
    request
      .head('/favicon.ico')
      .then(res => {

      });
```

__DELETE__ can be also called as `.del()` for compatibility with old IE where `delete` is a reserved word.

The HTTP method defaults to __GET__, so if you wish, the following is valid:

```js
     request('/search', (err, res) => {

     });
```
