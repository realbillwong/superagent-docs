# 支持 Promise

SuperAgent 的请求是一个`thenable` 对象，该对象与 JavaScript Promise 和 `async/await` 语法兼容。

```js
const res = await request.get(url);
```

如果您使用的是 `Promise`，请**不要**调用 `.end()` 或 `.pipe()`。 当用 `.then()` 或 `await` 的方式时，都会禁用其他使用请求的方式。

像 [co](https://github.com/tj/co) 之类的库或 [koa](https://github.com/koajs/koa) 之类的框架都可以在任何 SuperAgent 方法上 `yield`：

```js
const req = request
  .get('http://local')
  .auth('tobi', 'learnboost');
const res = yield req;
```

注意，SuperAgent 使用了全局的 `Promise` 对象，因此你需要使用 polyfill 才能在 Internet Explorer 或 Node.js 0.10 中使用 Promise。
