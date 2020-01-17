# 支持 Promise

SuperAgent's request is a "thenable" object that's compatible with JavaScript promises and the `async`/`await` syntax.

```js
    const res = await request.get(url);
```

If you're using promises, **do not** call `.end()` or `.pipe()`. Any use of `.then()` or `await` disables all other ways of using the request.

Libraries like [co](https://github.com/tj/co) or a web framework like [koa](https://github.com/koajs/koa) can `yield` on any SuperAgent method:

```js
    const req = request
      .get('http://local')
      .auth('tobi', 'learnboost');
    const res = yield req;
```

Note that SuperAgent expects the global `Promise` object to be present. You'll need a polyfill to use promises in Internet Explorer or Node.js 0.10.
