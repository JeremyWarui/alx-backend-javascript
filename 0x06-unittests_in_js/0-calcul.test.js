const mocha = require('mocha');
const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.equal(calculateNumber(2, 3), 5);
    assert.equal(calculateNumber(2, 2), 4);
    assert.equal(calculateNumber(-1, -3), -4);
   });

  it('should round floats', () => {
    assert.strictEqual(calculateNumber(2.3, 3.4), 6);
    assert.strictEqual(calculateNumber(1.2, 3.2), 4);
  });
});
