# Redirects

SuperAgent 默认会跟随 5 次重定向。你可以通过调用 `res.redirects(n)` 来设定最大跟随重定向 n 次。

```js
const response = await request.get('/some.png').redirects(2);
```

重定向次数超过设定的值时，那么这个请求会被当作错误处理。可以用 `.ok(res => res.status < 400)`
来将它们当作成功的请求来处理。
