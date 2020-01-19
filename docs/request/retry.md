# Retry

用 `.retry()` 方法来设置了重试的次数后，SuperAgent 会自动重试失败的请求。

`.retry()` 方法接受两个可选参数：number （默认值是 1）和 callback。`callback(err, res)`
回调函数会在重试之前执行。这个回调函数可以返回 `true`/`false` 来控制请求是否可以重试（but the maximum number of retries is always applied）。

```js
request
  .get('https://example.com/search')
  .retry(2) // or:
  .retry(2, callback)
  .then(finished);
  .catch(failed);
```

注意，使用 `.retry()` 方法时，只能用在**幂等**的请求上。也就是，多次请求不会造成其他副作用。比如：多次下单请求就不可以
