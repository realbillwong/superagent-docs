# `POST` / `PUT` 请求

A typical JSON __POST__ request might look a little like the following, where we set the Content-Type header field appropriately, and "write" some data, in this case just a JSON string.

```js
      request.post('/user')
        .set('Content-Type', 'application/json')
        .send('{"name":"tj","pet":"tobi"}')
        .then(callback)
        .catch(errorCallback)
```

Since JSON is undoubtedly the most common, it's the _default_! The following example is equivalent to the previous.

```js
      request.post('/user')
        .send({ name: 'tj', pet: 'tobi' })
        .then(callback, errorCallback)
```

Or using multiple `.send()` calls:

```js
      request.post('/user')
        .send({ name: 'tj' })
        .send({ pet: 'tobi' })
        .then(callback, errorCallback)
```

By default sending strings will set the `Content-Type` to `application/x-www-form-urlencoded`,
  multiple calls will be concatenated with `&`, here resulting in `name=tj&pet=tobi`:

```js
      request.post('/user')
        .send('name=tj')
        .send('pet=tobi')
        .then(callback, errorCallback);
```

SuperAgent formats are extensible, however by default "json" and "form" are supported. To send the data as `application/x-www-form-urlencoded` simply invoke `.type()` with "form", where the default is "json". This request will __POST__ the body "name=tj&pet=tobi".

```js
      request.post('/user')
        .type('form')
        .send({ name: 'tj' })
        .send({ pet: 'tobi' })
        .then(callback, errorCallback)
```

Sending a [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) object is also supported. The following example will __POST__ the content of the HTML form identified by id="myForm":

```js
      request.post('/user')
        .send(new FormData(document.getElementById('myForm')))
        .then(callback, errorCallback)
```
