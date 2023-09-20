/* const mocha = require('mocha');
const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.equal(calculateNumber(2, 3), 5);
    assert.equal(calculateNumber(2, 2), 4);
    assert.equal(calculateNumber(-1, -3), -4);
   });

  it('should round first number', () => {
    assert.strictEqual(calculateNumber(2.2, 3), 5);
    assert.strictEqual(calculateNumber(1.2, 3), 4);
    assert.strictEqual(calculateNumber(4.2, 5), 9);
  });
  it('should round second number', () => {
    assert.equal(calculateNumber(2, 3.5), 6);
    assert.equal(calculateNumber(1, 3.4), 4);
    assert.equal(calculateNumber(1.7, 0), 2);
  });
});

*/

const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('it round the first argument', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(1.7, 0), 2);
  });

  it('it round the second argument', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(0, 1.7), 2);
  });

  it('it should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.8), 3);
    assert.equal(calculateNumber(1.6, 1.8), 4);
  });
});
