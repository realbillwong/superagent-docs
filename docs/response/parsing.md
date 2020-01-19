# 解析

SuperAgent
会自动为你解析已知的响应体类型，目前之前的类型包括：`application/x-www-form-urlencoded`、`application/json` 和 `multipart/form-data`。

同时你还可以手动解析其他类型的数据格式：

```js
// browser
request.parse['application/xml'] = function (str) {
  return {'object': 'parsed from str'};
};

// node
request.parse['application/xml'] = function (res, cb) {
  //parse response text and set res.body here

  cb(null, res);
};

// going forward, responses of type 'application/xml'
// will be parsed automatically
```

您可以使用`.buffer(true).parse(fn)` 方法设置自定义解析器（优先于内置解析器）。 如果未启用响应缓冲（`.buffer(false)`），则将发出 `response` 事件，而无需等待主体解析器完成，因此`response.body` 将不可用。

## JSON / Urlencoded

`res.body` 是已解析后的对象。如果一个请求以 JSON 字符串 `'{"user": { "name": "tobi"}}'` 为响应结果，那么通过 `res.body.user.name`  可以取到值 tobi。

同样的，`x-www-form-urlencoded` 的 `user[name] = tobi` 值将产生相同的结果，但是仅支持一层嵌套。

如果您需要更复杂的数据，请发送 JSON。

数组会通过重复键发送，`.send({color: ['red', 'blue']})` 则发送 `color=red&color=blue`。如果希望数组键的名称中包含 `[]`，则必须自己添加它，因为 SuperAgent 不会自动添加它。

## Multipart

Nodejs 端可以通过 [Formidable](https://github.com/felixge/node-formidable) 包来支持 _multipart/form-data_。解析 Multipart 的响应时，`res.files` 也可使用。

下面这个示例，请求的响应体为 multipart：

```js
--whoop
Content-Disposition: attachment; name="image"; filename="tobi.png"
Content-Type: image/png

... data here ...
--whoop
Content-Disposition: form-data; name="name"
Content-Type: text/plain

Tobi
--whoop--
```

你可以通过 `res.body.name` 取得的值为 Tobi，`res.files.image`
取得一个包含文件路、文件名以及其他属性的 `File` 对象。

## Binary

在浏览器中，你可以用 `.responseType('blob')` 来处理响应体为 Binary 的请求。在 Nodejs 中这个 API
是不需要的。

该方法支持的参数有：

- `'blob'`
- `'arraybuffer'`

```js
req.get('/binary.data')
  .responseType('blob')
  .then(res => {
    // res.body will be a browser native Blob type here
  });
```

了解更多信息，请参见 MDN 的 [xhr.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType) 文档。
