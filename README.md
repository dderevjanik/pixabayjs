# pixabayjs
A Javascript Wrapper for the Pixabay API. To learn more about Pixabay, read the [docs](http://pixabay.com/api/docs/).

## Setup

1. Install dependencies:

    `npm install`


## Testing
1. Create a `config.json` file using `config.json.example` as a template. You will need a valid username and api_key.

1. Run tests:

    `npm test`

## Using Pixabayjs

```javascript
var pixabay = require('pixabayjs');

// Authenticate the client to make requests
pixabay.authenticate('username', 'api_key');

// Set default query parameters to make with every request
pixabay.defaults({safesearch: 'true'});

// Create a request promise
var requestPromise = pixabay
    .request()
    .query({order: 'latest'})
    .search(['dogs', 'puppies'])
    .get();

// NOTE: Use `request.search([])` instead of `request.query` to set the `q` request parameter. When the request url is being generated, `request` takes the array set by `request.search`, urlencodes each element, and concatenates them together before setting the `q` request parameter.

// Use the request promise
request.then(...);

```

Refer to Pixabay's API [documentation](http://pixabay.com/api/docs/) for the possible query parameters to use with `pixabay.defaults` and `request().query`.

## License
MIT
