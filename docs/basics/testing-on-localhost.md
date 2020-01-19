# 本地测试

## 强制指定连接 IP 地址

在 Node.js 中，可以使用 `.connect()` 方法忽略 DNS 解析并将所有请求定向到特定 IP 地址。例如，此请求将转到 localhost 而不是 `example.com`：

```js
const res = await request.get("http://example.com").connect("127.0.0.1");
```

由于可以重定向请求，因此可以指定多个主机名和多个 IP，以及一个特殊的 `*` 作为 fallback （注意：不支持其他通配符）。这些请求会将其 `Host` 标头保留为原始值。 `.connect(undefined)` 会关闭该功能。

```js
const res = await request.get("http://redir.example.com:555")
  .connect({
    "redir.example.com": "127.0.0.1", // redir.example.com:555 will use 127.0.0.1:555
    "www.example.com": false, // don't override this one; use DNS as normal
    "*": "proxy.example.com", // all other requests will go to this host
  });
```

## 忽略本地损坏/不安全的 HTTPS

在 Node.js 中，当 HTTPS 配置不正确且不安全时（例如使用自签名证书，**没有**通过 `.ca()` 来使用自签名证书），仍然可以通过调用 `.trustLocalhost()` 来允许向 `localhost` 的请求：

```js
const res = await request.get("https://localhost").trustLocalhost()
```

与 `.connect('127.0.0.1')` 一起使用，可以强制将对任何域的 HTTPS 请求重新路由到 `localhost`。

通常，忽略 `localhost` 上损坏的 HTTPS 是安全的，因为 loopback 接口不会暴露给不受信任的网络。将来，信任 `localhost` 可能会成为默认设置。 使用 `.trustLocalhost(false)` 强制检查 `127.0.0.1` 的真实性。

向其他 IP 发出请求时，我们有意不支持禁用 HTTPS 安全性，因为这样的选项最终被滥用为 HTTPS 问题的快速“修复”。你可以从 [Let's Encrypt](https://certbot.eff.org) 获得免费的HTTPS证书，或设置自己的CA（`.ca(ca_public_pem)`）以使您的自签名证书受信任。
