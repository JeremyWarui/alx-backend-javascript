const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber function', () => {
  it('should return sum of two integers', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(3, 3), 6);
    assert.strictEqual(calculateNumber(-2, -2), -4);
  });

  it('should return sum of rounded floats', () => {
    assert.equal(calculateNumber(1.2, 3.2), 4);
    assert.equal(calculateNumber(3.5, 3.6), 8);
  });

  it('should return sum if one is float', () => {
    assert.equal(calculateNumber(3.2, 2), 5);
    assert.equal(calculateNumber(3.5, 3), 7);
  });

  it('should cast non-numbers to numbers and return sum', () => {
    assert.equal(calculateNumber('3', 1), 4);
    assert.equal(calculateNumber('6', 3.5), 10);
  });
});
