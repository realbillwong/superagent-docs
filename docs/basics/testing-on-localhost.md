# 本地测试

## Forcing specific connection IP address

In Node.js it's possible to ignore DNS resolution and direct all requests to a specific IP address using `.connect()` method. For example, this request will go to localhost instead of `example.com`:

```js
    const res = await request.get("http://example.com").connect("127.0.0.1");
```

Because the request may be redirected, it's possible to specify multiple hostnames and multiple IPs, as well as a special `*` as the fallback (note: other wildcards are not supported). The requests will keep their `Host` header with the original value. `.connect(undefined)` turns off the feature.

```js
    const res = await request.get("http://redir.example.com:555")
      .connect({
        "redir.example.com": "127.0.0.1", // redir.example.com:555 will use 127.0.0.1:555
        "www.example.com": false, // don't override this one; use DNS as normal
        "*": "proxy.example.com", // all other requests will go to this host
      });
```

## Ignoring broken/insecure HTTPS on localhost

In Node.js, when HTTPS is misconfigured and insecure (e.g. using self-signed certificate *without* specifying own `.ca()`), it's still possible to permit requests to `localhost` by calling `.trustLocalhost()`:

```js
    const res = await request.get("https://localhost").trustLocalhost()
```

Together with `.connect("127.0.0.1")` this may be used to force HTTPS requests to any domain to be re-routed to `localhost` instead.

It's generally safe to ignore broken HTTPS on `localhost`, because the loopback interface is not exposed to untrusted networks. Trusting `localhost` may become the default in the future. Use `.trustLocalhost(false)` to force check of `127.0.0.1`'s authenticity.

We intentionally don't support disabling of HTTPS security when making requests to any other IP, because such options end up abused as a quick "fix" for HTTPS problems. You can get free HTTPS certificates from [Let's Encrypt](https://certbot.eff.org) or set your own CA (`.ca(ca_public_pem)`) to make your self-signed certificates trusted.
