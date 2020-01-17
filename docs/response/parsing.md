# Response 解析

SuperAgent will parse known response-body data for you,
currently supporting `application/x-www-form-urlencoded`,
`application/json`, and `multipart/form-data`. You can setup
automatic parsing for other response-body data as well:

```js
//browser
request.parse['application/xml'] = function (str) {
    return {'object': 'parsed from str'};
};

//node
request.parse['application/xml'] = function (res, cb) {
    //parse response text and set res.body here

    cb(null, res);
};

//going forward, responses of type 'application/xml'
//will be parsed automatically
```

You can set a custom parser (that takes precedence over built-in parsers) with the `.buffer(true).parse(fn)` method. If response buffering is not enabled (`.buffer(false)`) then the `response` event will be emitted without waiting for the body parser to finish, so `response.body` won't be available.

## JSON / Urlencoded

The property `res.body` is the parsed object, for example if a request responded with the JSON string '{"user":{"name":"tobi"}}', `res.body.user.name` would be "tobi". Likewise the x-www-form-urlencoded value of "user[name]=tobi" would yield the same result. Only one level of nesting is supported. If you need more complex data, send JSON instead.

Arrays are sent by repeating the key. `.send({color: ['red','blue']})` sends `color=red&color=blue`. If you want the array keys to contain `[]` in their name, you must add it yourself, as SuperAgent doesn't add it automatically.

## Multipart

The Node client supports _multipart/form-data_ via the [Formidable](https://github.com/felixge/node-formidable) module. When parsing multipart responses, the object `res.files` is also available to you. Suppose for example a request responds with the following multipart body:

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

You would have the values `res.body.name` provided as "Tobi", and `res.files.image` as a `File` object containing the path on disk, filename, and other properties.

## Binary

In browsers, you may use `.responseType('blob')` to request handling of binary response bodies. This API is unnecessary when running in node.js. The supported argument values for this method are

- `'blob'` passed through to the XmlHTTPRequest `responseType` property
- `'arraybuffer'` passed through to the XmlHTTPRequest `responseType` property

```js
req.get('/binary.data')
  .responseType('blob')
  .then(res => {
    // res.body will be a browser native Blob type here
  });
```
