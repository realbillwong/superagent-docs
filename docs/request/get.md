# GET 请求

The `.query()` method accepts objects, which when used with the __GET__ method will form a query-string. The following will produce the path `/search?query=Manny&range=1..5&order=desc`.

```js
     request
       .get('/search')
       .query({ query: 'Manny' })
       .query({ range: '1..5' })
       .query({ order: 'desc' })
       .then(res => {

       });
```

Or as a single object:

```js
    request
      .get('/search')
      .query({ query: 'Manny', range: '1..5', order: 'desc' })
      .then(res => {

      });
```

The `.query()` method accepts strings as well:

```js
      request
        .get('/querystring')
        .query('search=Manny&range=1..5')
        .then(res => {

        });
```

Or joined:

```js
      request
        .get('/querystring')
        .query('search=Manny')
        .query('range=1..5')
        .then(res => {

        });
```
