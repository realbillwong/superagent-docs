# Agents for global state

## Saving cookies

In Node SuperAgent does not save cookies by default, but you can use the `.agent()` method to create a copy of SuperAgent that saves cookies. Each copy has a separate cookie jar.

```js
    const agent = request.agent();
    agent
      .post('/login')
      .then(() => {
        return agent.get('/cookied-page');
      });
```

In browsers cookies are managed automatically by the browser, so the `.agent()` does not isolate cookies.

## Default options for multiple requests

Regular request methods called on the agent will be used as defaults for all requests made by that agent.

```js
    const agent = request.agent()
      .use(plugin)
      .auth(shared);

    await agent.get('/with-plugin-and-auth');
    await agent.get('/also-with-plugin-and-auth');
```

The complete list of methods that the agent can use to set defaults is: `use`, `on`, `once`, `set`, `query`, `type`, `accept`, `auth`, `withCredentials`, `sortQuery`, `retry`, `ok`, `redirects`, `timeout`, `buffer`, `serialize`, `parse`, `ca`, `key`, `pfx`, `cert`.
