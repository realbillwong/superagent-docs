# 进度

SuperAgent 会在上传和下载大文件时触发 `progress` 事件。

```js
request.post(url)
  .attach('field_name', file)
  .on('progress', event => {
    /* the event is:
    {
      direction: "upload" or "download"
      percent: 0 to 100 // may be missing if file size is unknown
      total: // total file size, may be missing
      loaded: // bytes downloaded or uploaded so far
    } */
  })
  .then()
```
