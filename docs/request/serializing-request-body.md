# 序列化请求 Body

SuperAgent 会自动序列化请求体中的 JSON 和表单。同时你还可以给其他类型的数据设置序列化方法：

```js
request.serialize['application/xml'] = function (obj) {
  return 'string generated from obj';
};

// 那么，所有 Content-Type 为 'application/xml' 的请求参数都会被自动的序列化
```

如果你想发送自定义格式的请求数据时，可以调用 `.serialize()` 方法来重写内置的序列化方法：

```js
request
  .post('/user')
  .send({foo: 'bar'})
  .serialize(obj => {
    return 'string generated from obj';
  });
```
