# Piping

Node 客户端允许你将数据传递到请求中或从请求中传递数据。请注意，使用 `.pipe()` 而**不是** `.end()`/`.then()` 方法。

例如，通过管道传递文件内容作为请求：

```js
const request = require('superagent');
const fs = require('fs');

const stream = fs.createReadStream('path/to/my.json');
const req = request.post('/somewhere');
req.type('json');
stream.pipe(req);
```

请注意，当你通过管道传输到请求时，SuperAgent 将会发送[chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding) 管道数据。需要注意的是这种类型的数据并非所有服务器都支持（例如Python WSGI 服务器）。

Note that when you pipe to a request, superagent sends the piped data with [chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding), which isn't supported by all servers (for instance, Python WSGI servers).

或将响应传递到文件：

```js
const stream = fs.createWriteStream('path/to/my.json');
const req = request.get('/some.json');
req.pipe(stream);
```

不能混用管道和 callback 或 Promise。

注意，你不应该尝试通过管道传递 `.end()` 的结果或 `Response` 对象：

```js
// 不要这样做
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

在 SuperAgent 的 [future version](https://github.com/visionmedia/superagent/issues/1188) 中，对 `pipe()` 的不正确调用将失败。
