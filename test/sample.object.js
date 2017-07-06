'use strict';

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

// sample tests
describe('object', function() {
  it('should return true if object is true object', function() {
    var foo = {
      'hello': 'bar'
    };
    expect(foo).to.be.an('object');
    expect(foo).to.not.be.a('string');
  });
});

