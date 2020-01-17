# 设置 Accept

In a similar fashion to the `.type()` method it is also possible to set the `Accept` header via the short hand method `.accept()`. Which references `request.types` as well allowing you to specify either the full canonicalized MIME type name as `type/subtype`, or the extension suffix form as "xml", "json", "png", etc. for convenience:

```js
     request.get('/user')
       .accept('application/json')

     request.get('/user')
       .accept('json')

     request.post('/user')
       .accept('png')
```
