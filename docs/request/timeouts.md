# Timeout

Sometimes networks and servers get "stuck" and never respond after accepting a request. Set timeouts to avoid requests waiting forever.

  * `req.timeout({deadline:ms})` or `req.timeout(ms)` (where `ms` is a number of milliseconds > 0) sets a deadline for the entire request (including all uploads, redirects, server processing time) to complete. If the response isn't fully downloaded within that time, the request will be aborted.

  * `req.timeout({response:ms})` sets maximum time to wait for the first byte to arrive from the server, but it does not limit how long the entire download can take. Response timeout should be at least few seconds longer than just the time it takes the server to respond, because it also includes time to make DNS lookup, TCP/IP and TLS connections, and time to upload request data.

You should use both `deadline` and `response` timeouts. This way you can use a short response timeout to detect unresponsive networks quickly, and a long deadline to give time for downloads on slow, but reliable, networks. Note that both of these timers limit how long *uploads* of attached files are allowed to take. Use long timeouts if you're uploading files.

```js
    request
      .get('/big-file?network=slow')
      .timeout({
        response: 5000,  // Wait 5 seconds for the server to start sending,
        deadline: 60000, // but allow 1 minute for the file to finish loading.
      })
      .then(res => {
          /* responded in time */
        }, err => {
          if (err.timeout) { /* timed out! */ } else { /* other error */ }
      });
```

Timeout errors have a `.timeout` property.
