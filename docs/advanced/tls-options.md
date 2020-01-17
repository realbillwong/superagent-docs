# TLS 选项

In Node.js SuperAgent supports methods to configure HTTPS requests:

- `.ca()`: Set the CA certificate(s) to trust
- `.cert()`: Set the client certificate chain(s)
- `.key()`: Set the client private key(s)
- `.pfx()`: Set the client PFX or PKCS12 encoded private key and certificate chain
- `.disableTLSCerts()`: Does not reject expired or invalid TLS certs. Sets internally `rejectUnauthorized=true`. *Be warned, this method allows MITM attacks.*

For more information, see Node.js [https.request docs](https://nodejs.org/api/https.html#https_https_request_options_callback).

```js
var key = fs.readFileSync('key.pem'),
    cert = fs.readFileSync('cert.pem');

request
  .post('/client-auth')
  .key(key)
  .cert(cert)
  .then(callback);
```

```js
var ca = fs.readFileSync('ca.cert.pem');

request
  .post('https://localhost/private-ca-server')
  .ca(ca)
  .then(res => {});
```
