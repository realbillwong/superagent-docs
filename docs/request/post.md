# POST / PUT 请求

下面的例子是一个典型的 JSON __POST__ 请求，设置一个适当的
`Content-Type`，然后传入一些数据，这个例子中传的是 JSON 字符串。

```js
request.post('/user')
  .set('Content-Type', 'application/json')
  .send('{"name":"tj","pet":"tobi"}')
  .then(callback)
  .catch(errorCallback)
```

由于 JSON 毫无疑问是最常见的，所以 `Content-Type` 的默认类型就是
`application/json`。

下面的写法跟上面是一样的效果：

```js
request.post('/user')
  .send({ name: 'tj', pet: 'tobi' })
  .then(callback, errorCallback)
```

或者多次调用 `.send()` 方法传入多个参数也行，效果仍然相同：

```js
request.post('/user')
  .send({ name: 'tj' })
  .send({ pet: 'tobi' })
  .then(callback, errorCallback)
```

默认的，传入的参数如果是字符串的话，SuperAgent 会默认设置 `Content-Type` 为 `application/x-www-form-urlencoded`。多次调用 `.send()` 会将各个参数用 `&` 拼接起来，下面例子的结果就是 `name=tj&pet=tobi`：

```js
request.post('/user')
  .send('name=tj')
  .send('pet=tobi')
  .then(callback, errorCallback);
```

SuperAgent 格式是可扩展的，然而默认的只有 'json' 和 'form' 是支持的。想要发送 `application/x-www-form-urlencoded` 类型参数时，只需要简单的调用 `.type('form')` 即可。此时，这个 __POST__ 请求的参数为 "name=tj&pet=tobi"。

```js
request.post('/user')
  .type('form')
  .send({ name: 'tj' })
  .send({ pet: 'tobi' })
  .then(callback, errorCallback)
```

发送 [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)
类型的对象也是支持的。下面这个例子会自动 __POST__ id 为 myForm 的表单内容。

```js
request.post('/user')
  .send(new FormData(document.getElementById('myForm')))
  .then(callback, errorCallback)
```
