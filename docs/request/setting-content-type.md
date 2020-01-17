# 设置 `Content-Type`

The obvious solution is to use the `.set()` method:

```js
     request.post('/user')
       .set('Content-Type', 'application/json')
```

As a short-hand the `.type()` method is also available, accepting
the canonicalized MIME type name complete with type/subtype, or
simply the extension name such as "xml", "json", "png", etc:

```js
     request.post('/user')
       .type('application/json')

     request.post('/user')
       .type('json')

     request.post('/user')
       .type('png')
```
