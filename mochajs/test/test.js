// cd /c/Users/lf549/mochajs
// ./node_modules/mocha/bin/mocha.js
// npm test or npx mocha

const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});