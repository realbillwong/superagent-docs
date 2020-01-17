# Multipart 请求

SuperAgent is also great for _building_ multipart requests for which it provides methods `.attach()` and `.field()`.

When you use `.field()` or `.attach()` you can't use `.send()` and you *must not* set `Content-Type` (the correct type will be set for you).

## Attaching files

To send a file use `.attach(name, [file], [options])`. You can attach multiple files by calling `.attach` multiple times. The arguments are:

 * `name` — field name in the form.
 * `file` — either string with file path or `Blob`/`Buffer` object.
 * `options` — (optional) either string with custom file name or `{filename: string}` object. In Node also `{contentType: 'mime/type'}` is supported. In browser create a `Blob` with an appropriate type instead.
```js
    request
      .post('/upload')
      .attach('image1', 'path/to/felix.jpeg')
      .attach('image2', imageBuffer, 'luna.jpeg')
      .field('caption', 'My cats')
      .then(callback);
```

## Field values

Much like form fields in HTML, you can set field values with `.field(name, value)` and `.field({name: value})`. Suppose you want to upload a few images with your name and email, your request might look something like this:

```js
     request
       .post('/upload')
       .field('user[name]', 'Tobi')
       .field('user[email]', 'tobi@learnboost.com')
       .field('friends[]', ['loki', 'jane'])
       .attach('image', 'path/to/tobi.png')
       .then(callback);
```
