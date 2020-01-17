# 同构

SuperAgent has two implementations: one for web browsers (using XHR) and one for Node.JS (using core http module). By default Browserify and WebPack will pick the browser version.

If want to use WebPack to compile code for Node.JS, you *must* specify [node target](https://webpack.github.io/docs/configuration.html#target) in its configuration.

## Using browser version in electron

[Electron](https://electron.atom.io/) developers report if you would prefer to use the browser version of SuperAgent instead of the Node version, you can `require('superagent/superagent')`. Your requests will now show up in the Chrome developer tools Network tab. Note this environment is not covered by automated test suite and not officially supported.
