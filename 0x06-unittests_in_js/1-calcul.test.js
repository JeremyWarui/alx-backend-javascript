const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function with type SUM', () => {
  it('should return sum of two integers', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 3, 3), 6);
    assert.strictEqual(calculateNumber('SUM', -2, -2), -4);
  });

  it('should return sum of rounded floats', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.2), 4);
    assert.equal(calculateNumber('SUM', 3.5, 3.6), 8);
  });

  it('should return sum if one is float', () => {
    assert.equal(calculateNumber('SUM', 3.2, 2), 5);
    assert.equal(calculateNumber('SUM', 3.5, 3), 7);
  });

  it('should cast non-numbers to numbers and return sum', () => {
    assert.equal(calculateNumber('SUM', '3', 1), 4);
    assert.equal(calculateNumber('SUM', '6', 3.5), 10);
  });
});

describe('calculateNumber with type SUBTRACT', () => {
  it('should return deducted number of two integers', () => {
    assert.equal(calculateNumber('SUBTRACT', 4, 3), 1);
    assert.equal(calculateNumber('SUBTRACT', 5, 1), 4);
  });

  it('should return subtracted num of two floats', () => {
    assert.equal(calculateNumber('SUBTRACT', 4.5, 1.2), 4);
    assert.equal(calculateNumber('SUBTRACT', 6.5, 5.5), 1);
  });

  it('should return subtracted num of one float', () => {
    assert.equal(calculateNumber('SUBTRACT', 4.5, 3), 2);
    assert.equal(calculateNumber('SUBTRACT', 5.3, 3), 2);
  });
});

describe('calculateNumber with type DIVIDE', () => {
  it('should return the quotient of two integers', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
    assert.equal(calculateNumber('DIVIDE', 8, 4), 2);
  });

  it('should return an "Error" string when on num of 0', () => {
    assert.deepEqual(calculateNumber('DIVIDE', 6, 0.3), 'Error');
    assert.deepEqual(calculateNumber('DIVIDE', 4, 0.1), 'Error');
  });

  it('should return quotient of one/two floats', () => {
    assert.equal(calculateNumber('DIVIDE', 5.5, 2), 3);
    assert.equal(calculateNumber('DIVIDE', 6, 2.6), 2);
  });
});
