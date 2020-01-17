# Authentication

In both Node and browsers auth available via the `.auth()` method:

```js
    request
      .get('http://local')
      .auth('tobi', 'learnboost')
      .then(callback);
```


In the _Node_ client Basic auth can be in the URL as "user:pass":

```js
    request.get('http://tobi:learnboost@local').then(callback);
```

By default only `Basic` auth is used. In browser you can add `{type:'auto'}` to enable all methods built-in in the browser (Digest, NTLM, etc.):

```js
    request.auth('digest', 'secret', {type:'auto'})
```
