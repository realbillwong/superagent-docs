# 全局 Agents

## 保存 Cookies

默认情况下在 Node 中，SuperAgent 不会保存 cookie，但是你可以使用 `.agent()` 方法来创建保存 cookie 的 SuperAgent 副本。 这样每个副本都会有一个单独的 Cookie。

```js
const agent = request.agent();
agent
  .post('/login')
  .then(() => {
    return agent.get('/cookied-page');
  });
```

在浏览器中，cookie 由浏览器自动管理，因此 `.agent()` 不会隔离 cookie。

## 多个请求的默认选项

所有在同一个 Agent 上发出的请求，都将拥有该 Agent 的全部属性。

```js
const agent = request.agent()
  .use(plugin)
  .auth(shared);

await agent.get('/with-plugin-and-auth');
await agent.get('/also-with-plugin-and-auth');
```

Agent 可用于设置默认值的方法的完整列表为：`use`, `on`, `once`, `set`, `query`, `type`, `accept`, `auth`, `withCredentials`, `sortQuery`, `retry`, `ok`, `redirects`, `timeout`, `buffer`, `serialize`, `parse`, `ca`, `key`, `pfx`, `cert`.
