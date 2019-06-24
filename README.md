[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)](https://github.com/semantic-release/semantic-release)
[![Version](https://img.shields.io/npm/v/gatsby-plugin-breadcrumb.svg?style=for-the-badge)]()
[![License](https://img.shields.io/npm/l/gatsby-plugin-breadcrumb.svg?style=for-the-badge)]()
[![Issues](https://img.shields.io/github/issues-raw/sbardian/wot-quotes.svg?style=for-the-badge)](https://github.com/sbardian/wot-quotes/issues)
[![Release Date](https://img.shields.io/github/release-date/sbardian/wot-quotes.svg?style=for-the-badge)](https://github.com/sbardian/wot-quotes)

# Serverless function that returns Wheel of Time quotes!

## Built with Heroku, Hasura and stdlib.

## How to use

### Browser

You can use a web browser to hit the serverless function here:
https://sbardian.api.stdlib.com/wotQuotes@0.0.1/

URL parameter options:

- credit (string): Character responsible for quote
- limit (number): Number of quotes to return
- random (boolean): Return one random quote

### Example using credit and limit three URL parameter options:

https://sbardian.api.stdlib.com/wotQuotes@0.0.1/?credit=Thom&limit=2

### Example using random:

https://sbardian.api.stdlib.com/wotQuotes@0.0.1/?random=true

### Javascript

```javascript
fetch(
  'https://sbardian.api.stdlib.com/wotQuotes@0.0.1/?credit=Thom&random=true',
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```
