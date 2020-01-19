# HEAD 请求

同样，可以在 __HEAD__ 请求后面用 `.query()` 方法添加 query 参数。下面这个示例请求得到的请求就是：`/users?email=joe@smith.com`。

```js
request
  .head('/users')
  .query({ email: 'joe@smith.com' })
  .then(res => {

  });
```
