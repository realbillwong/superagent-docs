# Multipart 请求

SuperAgent 提供了 `.attach()` 和 `.field()` 两个方法来构建 Multipart 请求。

当你用 `.attach()` 或者 `.field()` 的时候，你无法调用 `.send()` 方法，并且你**不能**设置
`Content-Type`，SuperAgent 会自动添加正确的 `Content-Type`。

##
## 附加文件

通过调用 `.attarch(name, [file], [options])` 方法来发送一个文件。可以多次调用以发送多个文件。

`attach` 方法的参数如下：

* `name` — 字段名
* `file` — 文件路径字符串或者 `Blob`/`Buffer` 对象
* `options` — （可选参数）文件名字符串或者 `{filename: string}` 对象。在 Nodejs 端还可以传 `{contentType: 'mime/type'}`，浏览器端用适当的类型的 `Blob`。

```js
request
  .post('/upload')
  .attach('image1', 'path/to/felix.jpeg')
  .attach('image2', imageBuffer, 'luna.jpeg')
  .field('caption', 'My cats')
  .then(callback);
```

## Field 值

类似于 HTML 中的表单字段，你可以通过 `.field(name, value)` 和 `.field({ name: value })`
来设置字段值。

假设你想上传头像、昵称和邮箱，那么你的请求应该看起来下面这样：

```js
 request
   .post('/upload')
   .field('user[name]', 'superagnet')
   .field('user[email]', 'test@example.com')
   .attach('image', 'path/to/superagent.png')
   .then(callback);
```
