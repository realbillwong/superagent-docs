# Progress tracking

SuperAgent fires `progress` events on upload and download of large files.

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
