# 属性

在 `Response` 对象上有许多有用的标志和属性，包括响应文本，已解析的响应正文，标头字段，状态标志等。

## Response text

`res.text` 属性包含的是未解析的响应体字符串。在 Client 端请求时 response 始终会有该属性；在 Nodejs 端请求时，只有 MIME
类型为 `text/*`、`*/json` 或 `x-www-form-urlencoded` 时，response 中才会有该属性。

这样做的原因是为了节省内存，因为缓冲大型主体（例如，多部分文件或图像）的文本效率极低。 要强制缓冲，请参见[缓冲响应](/response/buffering.html)部分。

## Response body

就像 SuperAgent 可以自动序列化请求数据一样，它也可以自动解析它的响应数据。 当为 Content-Type 定义了解析器时，SuperAgent 将对响应体进行解析，然后可以通过 `res.body` 获得解析后的对象。

SuperAgent 默认的解析器包括 `application/json` 和 `application/x-www-form-urlencoded`。

## Response header fields

`res.header` 包含一个解析后的标头字段的对象，像 Nodejs 一样，所有字段名均小写。例如 `res.header['content-length']`。

## Response Content-Type

Content-Type 响应标头是特殊情况，提供 `res.type` 用来获取，且不包含字符集信息。例如，`text/html; charset=utf8` 的 Content-Type 请求 `res.type` 的值是 `text/html`，然后 `res.charset` 属性是 `utf8`。

## Response status

响应的 Status 标志可帮助确定请求是否成功以及其他有用信息，从而使 SuperAgent 非常适合与 RESTful Web 服务进行交互。

这些标志当前定义为：

```js
var type = status / 100 | 0;

// status / class
res.status = status;
res.statusType = type;

// basics
res.info = 1 == type;
res.ok = 2 == type;
res.clientError = 4 == type;
res.serverError = 5 == type;
res.error = 4 == type || 5 == type;

// sugar
res.accepted = 202 == status;
res.noContent = 204 == status || 1223 == status;
res.badRequest = 400 == status;
res.unauthorized = 401 == status;
res.notAcceptable = 406 == status;
res.notFound = 404 == status;
res.forbidden = 403 == status;
```
