# 错误处理

Your callback function will always be passed two arguments: error and response. If no error occurred, the first argument will be null:

```js
    request
     .post('/upload')
     .attach('image', 'path/to/tobi.png')
     .then(res => {

     });
```

An "error" event is also emitted, with you can listen for:

```js
    request
      .post('/upload')
      .attach('image', 'path/to/tobi.png')
      .on('error', handle)
      .then(res => {

      });
```

Note that **superagent considers 4xx and 5xx responses (as well as unhandled 3xx responses) errors by default**. For example, if you get a `304 Not modified`, `403 Forbidden` or `500 Internal server error` response, this status information will be available via `err.status`. Errors from such responses also contain an `err.response` field with all of the properties mentioned in "[Response properties](#response-properties)". The library behaves in this way to handle the common case of wanting success responses and treating HTTP error status codes as errors while still allowing for custom logic around specific error conditions.

Network failures, timeouts, and other errors that produce no response will contain no `err.status` or `err.response` fields.

If you wish to handle 404 or other HTTP error responses, you can query the `err.status` property. When an HTTP error occurs (4xx or 5xx response) the `res.error` property is an `Error` object, this allows you to perform checks such as:

```js
    if (err && err.status === 404) {
      alert('oh no ' + res.body.message);
    }
    else if (err) {
      // all other error types we handle generically
    }
```

Alternatively, you can use the `.ok(callback)` method to decide whether a response is an error or not. The callback to the `ok` function gets a response and returns `true` if the response should be interpreted as success.

```js
    request.get('/404')
      .ok(res => res.status < 500)
      .then(response => {
        // reads 404 page as a successful response
      })
```
