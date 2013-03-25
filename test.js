var assert = require('chai').assert;
var base64 = require('./index');

var HELLO = 'hello';
var HELLO_AS_B64 = 'aGVsbG8=';
var FOO = 'foo';
var FOO_AS_B64 = 'Zm9v';

describe('Base64', function() {
  describe('encode', function() {
    it('encodes strings', function() {
      assert.equal(base64.encode(HELLO), HELLO_AS_B64);
      assert.equal(base64.encode(FOO), FOO_AS_B64);
    });
  });
  describe('decode', function() {
    it('decodes strings', function() {
      assert.equal(base64.decode(HELLO_AS_B64), HELLO);
      assert.equal(base64.decode(FOO_AS_B64), FOO);
    });
  });
})
