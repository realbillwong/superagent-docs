# 序列化请求 Body

SuperAgent will automatically serialize JSON and forms.
You can setup automatic serialization for other types as well:

```js
request.serialize['application/xml'] = function (obj) {
    return 'string generated from obj';
};

// going forward, all requests with a Content-type of
// 'application/xml' will be automatically serialized
```
If you want to send the payload in a custom format, you can replace
the built-in serialization with the `.serialize()` method on a per-request basis:

```js
request
    .post('/user')
    .send({foo: 'bar'})
    .serialize(obj => {
        return 'string generated from obj';
    });
```
