# 认证

在 Node 和浏览器中，都可以通过 `.auth()` 方法进行认证：

```js
request
  .get('http://local')
  .auth('tobi', 'learnboost')
  .then(callback);
```

在 __Node__ 端，基本身份验证可以在 URL 中用 `user:pass` 进行验证：

```js
request.get('http://tobi:learnboost@local').then(callback);
```

默认情况下，仅使用**基本**身份验证。在浏览器中，您可以添加 `{type: 'auto'}` 以启用浏览器中内置的所有方法（Digest，NTLM 等）：

```js
request.auth('digest', 'secret', {type:'auto'})
```
