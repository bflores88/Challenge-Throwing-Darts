// write tests here
'use strict';

const scoreThrows = require('../index.js');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('Darts Score Calculator', function() {
  it('should be a function', function() {
    scoreThrows.should.be.a('function');
  });

  it('should return a number', function() {
    expect(scoreThrows([])).to.be.a('number');
  });

  it('an empty collection should return -1', function() {
    scoreThrows([]).should.equal(-1);
  });

  it('if all radiuses are less than 5, award 100 bonus points!', function() {
    scoreThrows([1, 1, 1]).should.equal(130);
  });

  it('should accept a collection of scores of any length', function() {
    scoreThrows([1, 7, 2, 9, 14, 3, 20]).should.equal(40);
  });

  it('should only accept scores between 1 and 20', function() {
    scoreThrows([-1, 1, 7, 25]).should.equal(15);
  });
});