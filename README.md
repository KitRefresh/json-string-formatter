# JSON String Formatter

A lightweight JSON string formatter which can prettify your JSON string without parsing it to object.

## Install
`npm install --save json-string-formatter`

or

`yarn add json-string-formatter`

## Usage
1. Import
```javascript
const { format } = require('json-string-formatter';

// or

const jsonFormatter = require('json-string-formatter');

jsonFormatter.format(...)

```

2. Basic usage
```javascript

let input = "{'text': 'hello world!'}";
let output = format(input);

/**
 * output = `{
 *  'text': 'hello world!'
 * }`
 * /
```

3. Customized indent and linebreak
```javascript

let input = "{'text': 'hello world!'}";
let output = format(input, /* indent */ '--', /* linebreak */ '|');

/**
 * output = `{|--'text': 'hello world!'|}`
 */

```