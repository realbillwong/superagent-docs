# `HEAD` 请求

You can also use the `.query()` method for HEAD requests. The following will produce the path `/users?email=joe@smith.com`.

```js
      request
        .head('/users')
        .query({ email: 'joe@smith.com' })
        .then(res => {

        });
```
