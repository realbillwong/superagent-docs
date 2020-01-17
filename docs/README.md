Superagnt 是一个轻量级的渐进式同构版本 HTTP 请求库，支持许多高级 HTTP 客户端功能。

Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features

## 安装

```sh
npm install superagent
// or
yarn add superagent
```

## 快速开始

### Node

```js
const superagent = require('superagent');

// callback
superagent
  .post('/api/pet')
  .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    // Calling the end function will send the request
  });

// promise with then/catch
superagent.post('/api/pet').then(console.log).catch(console.error);

// promise with async/await
(async () => {
  try {
    const res = await superagent.post('/api/pet');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
```

### Browser

**The browser-ready, minified version of `superagent` is only 6 KB (minified and gzipped)!**

Browser-ready versions of this module are available via [jsdelivr][], [unpkg][], and also in the `node_modules/superagent/dist` folder in downloads of the `superagent` package.

> Note that we also provide unminified versions with `.js` instead of `.min.js` file extensions.

#### VanillaJS

This is the solution for you if you're just using `<script>` tags everywhere!

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.from,Promise,Symbol,Object.setPrototypeOf,Object.getOwnPropertySymbols"></script>
<script src="https://cdn.jsdelivr.net/npm/superagent"></script>
<!-- if you wish to use unpkg.com instead: -->
<!-- <script src="https://unpkg.com/superagent"></script> -->
<script type="text/javascript">
  (function() {
    // superagent is exposed as `window.superagent`
    // if you wish to use "request" instead please
    // uncomment the following line of code:
    // `window.request = superagent;`
    superagent
      .post('/api/pet')
      .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end(function (err, res) {
        // Calling the end function will send the request
      });
  })();
</script>
```

#### Bundler

If you are using [browserify][], [webpack][], [rollup][], or another bundler, then you can follow the same usage as [Node](#node) above.


## 支持程度

* Node: v6.x+
* Browsers:

  ```sh
  and_chr 71
  and_ff 64
  and_qq 1.2
  and_uc 11.8
  android 67
  android 4.4.3-4.4.4
  baidu 7.12
  bb 10
  bb 7
  chrome 73
  chrome 72
  chrome 71
  edge 18
  edge 17
  firefox 66
  firefox 65
  ie 11
  ie 10
  ie 9
  ie_mob 11
  ie_mob 10
  ios_saf 12.0-12.1
  ios_saf 11.3-11.4
  op_mini all
  op_mob 46
  op_mob 12.1
  opera 58
  opera 57
  safari 12
  safari 11.1
  samsung 8.2
  samsung 7.2-7.4
  ```

### Required Browser Features

We recommend using <https://polyfill.io> (specifically with the bundle mentioned in [VanillaJS](#vanillajs) above):

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.from,Promise,Symbol,Object.setPrototypeOf,Object.getOwnPropertySymbols"></script>
```

* IE 9-10 requires a polyfill for `Promise`, `Array.from`, `Symbol`, `Object.getOwnPropertySymbols`, and `Object.setPrototypeOf`
* IE 9 requires a polyfill for `window.FormData` (we recommend [formdata-polyfill][])


## 插件

SuperAgent is easily extended via plugins.

```js
const nocache = require('superagent-no-cache');
const superagent = require('superagent');
const prefix = require('superagent-prefix')('/static');

superagent
  .get('/some-url')
  .query({ action: 'edit', city: 'London' }) // query string
  .use(prefix) // Prefixes *only* this request
  .use(nocache) // Prevents caching of *only* this request
  .end((err, res) => {
    // Do something
  });
```

Existing plugins:

* [superagent-no-cache](https://github.com/johntron/superagent-no-cache) - prevents caching by including Cache-Control header
* [superagent-prefix](https://github.com/johntron/superagent-prefix) - prefixes absolute URLs (useful in test environment)
* [superagent-suffix](https://github.com/timneutkens1/superagent-suffix) - suffix URLs with a given path
* [superagent-mock](https://github.com/M6Web/superagent-mock) - simulate HTTP calls by returning data fixtures based on the requested URL
* [superagent-mocker](https://github.com/shuvalov-anton/superagent-mocker) — simulate REST API
* [superagent-cache](https://github.com/jpodwys/superagent-cache) - A global SuperAgent patch with built-in, flexible caching
* [superagent-cache-plugin](https://github.com/jpodwys/superagent-cache-plugin) - A SuperAgent plugin with built-in, flexible caching
* [superagent-jsonapify](https://github.com/alex94puchades/superagent-jsonapify) - A lightweight [json-api](http://jsonapi.org/format/) client addon for superagent
* [superagent-serializer](https://github.com/zzarcon/superagent-serializer) - Converts server payload into different cases
* [superagent-httpbackend](https://www.npmjs.com/package/superagent-httpbackend) - stub out requests using AngularJS' $httpBackend syntax
* [superagent-throttle](https://github.com/leviwheatcroft/superagent-throttle) - queues and intelligently throttles requests
* [superagent-charset](https://github.com/magicdawn/superagent-charset) - add charset support for node's SuperAgent
* [superagent-verbose-errors](https://github.com/jcoreio/superagent-verbose-errors) - include response body in error messages for failed requests
* [superagent-declare](https://github.com/damoclark/superagent-declare) - A simple [declarative](https://en.wikipedia.org/wiki/Declarative_programming) API for SuperAgent
* [superagent-node-http-timings](https://github.com/webuniverseio/superagent-node-http-timings) - measure http timings in node.js

Please prefix your plugin with `superagent-*` so that it can easily be found by others.

For SuperAgent extensions such as couchdb and oauth visit the [wiki](https://github.com/visionmedia/superagent/wiki).

[formdata-polyfill]: https://www.npmjs.com/package/formdata-polyfill

[jsdelivr]: https://www.jsdelivr.com/

[unpkg]: https://unpkg.com/

[browserify]: https://github.com/browserify/browserify

[webpack]: https://github.com/webpack/webpack

[rollup]: https://github.com/rollup/rollup
