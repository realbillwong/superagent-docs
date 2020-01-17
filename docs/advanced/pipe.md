# Piping data

The Node client allows you to pipe data to and from the request. Please note that `.pipe()` is used **instead of** `.end()`/`.then()` methods.

For example piping a file's contents as the request:

```js
    const request = require('superagent');
    const fs = require('fs');

    const stream = fs.createReadStream('path/to/my.json');
    const req = request.post('/somewhere');
    req.type('json');
    stream.pipe(req);
```

Note that when you pipe to a request, superagent sends the piped data with [chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding), which isn't supported by all servers (for instance, Python WSGI servers).

Or piping the response to a file:

```js
    const stream = fs.createWriteStream('path/to/my.json');
    const req = request.get('/some.json');
    req.pipe(stream);
```

 It's not possible to mix pipes and callbacks or promises. Note that you should **NOT** attempt to pipe the result of `.end()` or the `Response` object:

 ```js
    // Don't do either of these:
    const stream = getAWritableStream();
    const req = request
      .get('/some.json')
      // BAD: this pipes garbage to the stream and fails in unexpected ways
      .end((err, this_does_not_work) => this_does_not_work.pipe(stream))
    const req = request
      .get('/some.json')
      .end()
      // BAD: this is also unsupported, .pipe calls .end for you.
      .pipe(nope_its_too_late);
 ```

In a [future version](https://github.com/visionmedia/superagent/issues/1188) of superagent, improper calls to `pipe()` will fail.
