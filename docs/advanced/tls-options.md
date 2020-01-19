# TLS 选项

在 Node.js 中，SuperAgent 支持配置 HTTPS 请求的方法：

- `.ca()`: 将 CA 证书设置为信任
- `.cert()`: 设置客户端证书链
- `.key()`: 设置客户端私钥
- `.pfx()`: 设置客户端 PFX 或 PKCS12 编码的私钥和证书链
- `.disableTLSCerts()`: 不拒绝过期或无效的TLS证书，内部设置 `rejectUnauthorized = true`。 **请注意，此方法可能会被 MITM 攻击。**

有关更多信息，请参见Node.js [https.request docs](https://nodejs.org/api/https.html#https_https_request_options_callback).

```js
const key = fs.readFileSync('key.pem');
cosnt cert = fs.readFileSync('cert.pem');

request
  .post('/client-auth')
  .key(key)
  .cert(cert)
  .then(callback);
```

```js
const ca = fs.readFileSync('ca.cert.pem');

request
  .post('https://localhost/private-ca-server')
  .ca(ca)
  .then(res => {});
```
