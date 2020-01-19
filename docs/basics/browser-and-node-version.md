# 同构

SuperAgent 有两种实现：一种用于 Web 浏览器（使用 XHR ），另一种用于 Node.js （使用核心 http 模块）。 默认情况下，Browserify 和 WebPack 将选择浏览器版本。

如果要使用 WebPack 为 Node.js 编译代码，则**必须**在其配置中指定 [node target](https://webpack.github.io/docs/configuration.html#target)。

## 在 Electron 中使用 Browser 版本

[Electron](https://electron.atom.io/) 开发人员报告，如果你更喜欢使用 SuperAgent 的浏览器版本而不是 Node 版本，则可以 `require('superagent/superagent')`。

这样你的请求将显示在 Chrome 开发者工具的“网络”标签中。请注意，自动测试套件未涵盖此环境，并且未正式支持该环境。
