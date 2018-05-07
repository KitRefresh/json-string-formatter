const { ERROR_MESSAGE } = require('../../src/formatter');

module.exports = [
  {
    name: 'empty object',
    input: `  {}  `,
    output: '{\n\t\n}',
    valid: true,
  },
  {
    name: 'empty array',
    input: `
      []
    `,
    output: '[\n\t\n]',
    valid: true,
  },
  {
    name: 'normal case',
    input: '{"name": "John", "age": 1, "friends": ["Amy", "Lots"]}',
    output: '{\n\t"name": "John",\n\t"age": 1,\n\t"friends": [\n\t\t"Amy",\n\t\t"Lots"\n\t]\n}',
    valid: true,
  },
  {
    name: 'normal case with escape',
    input: '{"name": "John\\\'s Smith", "age": 1, "friends": ["Amy", "Lots"]}',
    output: '{\n\t"name": "John\\\'s Smith",\n\t"age": 1,\n\t"friends": [\n\t\t"Amy",\n\t\t"Lots"\n\t]\n}',
    valid: true,
  },
  {
    name: 'invalid hierarchy',
    input: '[}',
    valid: false,
    throw: ERROR_MESSAGE.NOT_CLOSED_INPUT,
  },
  {
    name: 'multiple json',
    input: '{} {}',
    valid: false,
    throw: ERROR_MESSAGE.NOT_CLOSED_INPUT,
  }
]