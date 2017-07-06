'use strict';

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

// sample tests
describe('array', function() {
  describe('.indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(5), -1, '[1,2,3].indexOf(5) equals -1');
      assert.equal([1,2,3].indexOf(0), -1, '[1,2,3].indexOf(0) equals -1');
    });

    it('should return index when the value is present', function() {
      assert.equal([1,2,3].indexOf(1), 0, '[1,2,3].indexOf(1) equals 0');
      assert.equal([1,2,3].indexOf(2), 1, '[1,2,3].indexOf(2) equals 1');
    });
  });

  describe('.length', function() {
    it('should return length of array', function() {
      assert.equal([1,2,3].length, 3);
    });
  });
});

