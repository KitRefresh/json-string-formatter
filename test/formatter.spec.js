const { format, createIndents, ERROR_MESSAGE } = require('../src/formatter');
const { expect } = require('chai');

const door = require('./data/door.json');
const list = require('./data/list.json');
const product = require('./data/product.json');
const TestCases = require('./data/testcases');

describe('createIndents() should create correct prefix', () => {
  it('when using \'\\t\' as indent.', () => {
    expect(createIndents('\t', 0)).to.eql('');
    expect(createIndents('\t', 1)).to.eql('\t');
    expect(createIndents('\t', 2)).to.eql('\t\t');
  });

  it('when using \'|\' as indent.', () => {
    expect(createIndents('|', 0)).to.eql('');
    expect(createIndents('|', 1)).to.eql('|');
    expect(createIndents('|', 2)).to.eql('||');
  });
});

describe('formatter()', () => {

  describe('should format door.json correctly', () => {
    it('when using default indents.', () => {
      let input = JSON.stringify(door, null, '\t');
      expect(format(input)).to.eql(input);
    });

    it('when using customized indents.', () => {
      let input = JSON.stringify(door);
      expect(format(input, '|')).to.eql(JSON.stringify(door, null, '|'));
    });
  });

  describe('should format single case correctly:', () => {
    TestCases.forEach((test) => {
      let testName = test.name || '[Anonym test]';
      it(test.name + '.', () => {
        if (test.valid) {
          expect(format(test.input, test.indent, test.newline)).to.eql(test.output);
        } else if (test.throw) {
          expect(() => format(test.input, test.indent, test.newline)).to.throw(test.throw);
        } else {
          expect(format(test.input, test.indent, test.newline)).to.not.eql(test.output);
        }
      });
    });
  });

});
