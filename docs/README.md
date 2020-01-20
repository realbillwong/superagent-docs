SuperAgent 是作者对现有 HTTP 请求库 API 感到不爽之后，创造出来的一个轻量级的渐进式 Ajax 请求库，旨在实现灵活性，可读性和低学习曲线。

同时 SuperAgent 也可以在 Node.js 中一起使用！Client 端和 Nodejs 端 API 接口完全相同，支持许多高级 HTTP 客户端功能。

项目地址：[visionmedia/superagent](https://github.com/visionmedia/superagent)

[![build status](https://img.shields.io/travis/visionmedia/superagent.svg)](https://travis-ci.org/visionmedia/superagent)
[![code coverage](https://img.shields.io/codecov/c/github/visionmedia/superagent.svg)](https://codecov.io/gh/visionmedia/superagent)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/visionmedia/superagent.svg)](LICENSE)

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

// callback 写法
superagent
  .post('/api/pet')
  .send({ name: 'Manny', species: 'cat' }) // 发送 JSON 的 POST 请求
  .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    // 当调用 end 这个函数时才会真正的发送请求
  });

// promise 写法
superagent.post('/api/pet').then(console.log).catch(console.error);

// async/await 写法
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

**压缩后的 `Superagent` js 文件只有 6KB（gzip 后）**

浏览器端的 js 文件可以在 [jsdelivr][], [unpkg][] 上找到，或者在 `node_modules/superagent/dist` 目录下。

> 注：以上地方均可以找到 `.js` 和 `.min.js` 两个版本，生产环境请使用 `.min.js` 版本

#### VanillaJS

通过 `<script>` 标签的方式引用：

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.from,Promise,Symbol,Object.setPrototypeOf,Object.getOwnPropertySymbols"></script>
<script src="https://cdn.jsdelivr.net/npm/superagent"></script>
<!-- 或者使用下面的 unpkg.com 源: -->
<!-- <script src="https://unpkg.com/superagent"></script> -->
<script type="text/javascript">
  (function() {
    // superagent 会暴露在 `window` 这个全局对象上
    superagent
      .post('/api/pet')
      .send({ name: 'Manny', species: 'cat' })
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end(function (err, res) {
        // 发出请求
      });
  })();
</script>
```

#### Bundler

如果是用 [browserify][], [webpack][], [rollup][], 或者其他打包工具的话，使用方式同上面 [Node](#node).

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

### 浏览器特性要求

推荐使用 <https://polyfill.io> 的方式来解决低版本浏览器不能使用的问题，代码参考上面 [VanillaJS](#vanillajs) 小结。

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.from,Promise,Symbol,Object.setPrototypeOf,Object.getOwnPropertySymbols"></script>
```

* IE 9-10 需要 polyfill 包括 `Promise`, `Array.from`, `Symbol`, `Object.getOwnPropertySymbols`, and `Object.setPrototypeOf`
* IE 9 需要 polyfill 包括 `window.FormData` (推荐 [formdata-polyfill][])

## 插件

SuperAgent 可以轻松的通过插件来扩展。

```js
const nocache = require('superagent-no-cache');
const superagent = require('superagent');
const prefix = require('superagent-prefix')('/static');

superagent
  .get('/some-url')
  .query({ action: 'edit', city: 'London' })
  .use(prefix) // 只给当前请求添加前缀
  .use(nocache) // 只给当前请求禁用缓存
  .end((err, res) => {
    // 发送请求
  });
```

社区已有插件列表：

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

如果你需要开发 Superagent 的插件的话，请务必命名为 `superagent-*` 格式，这样方便其他用户发现它。

[formdata-polyfill]: https://www.npmjs.com/package/formdata-polyfill

[jsdelivr]: https://www.jsdelivr.com/

[unpkg]: https://unpkg.com/

[browserify]: https://github.com/browserify/browserify

[webpack]: https://github.com/webpack/webpack

[rollup]: https://github.com/rollup/rollup

## 贡献者

| Name                |
| ------------------- |
| **Kornel Lesiński** |
| **Peter Lyons**     |
| **Hunter Loftis**   |
| **Nick Baugh**      |
