# Buffering

要强制将响应主体缓冲为 `res.text`，你可以调用 `req.buffer()`。要撤消默认的文本响应缓冲，例如 `text/plain`，`text/html` 等，可以调用 `req.buffer(false)` 取消。

当你用 `res.buffered` 开启 Buffering 时，你可以使用它在同一回调中的处理缓冲和非缓冲响应。
