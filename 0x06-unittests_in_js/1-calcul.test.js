const assert = require('assert');

const calculateNumber = require('./1-calcul.js');

describe('Check output calculateNumber(type=SUM)' , () => {
  it('Returns sum of two numbers' , () => {
    assert.equal(calculateNumber('SUM', 1.2, 3), 4);
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('Check output of first rounded number', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3), 4);
    assert.equal(calculateNumber('SUM', 4.2, 1), 5);
  });
  it('Check output of second rounded number', () => {
    assert.equal(calculateNumber('SUM', 1, 3.2), 4);
    assert.equal(calculateNumber('SUM', 2, 4.6), 7);
  });
});

describe('Check output calculateNumber(type=SUBTRACT)', () => {
  it('Returns subtraction of two numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
    assert.equal(calculateNumber('SUBTRACT', 6.5, 3.5), 3);
  });
  it('Check output of first rounded number', () => {
    assert.equal(calculateNumber('SUBTRACT', 6.5, 3), 4);
    assert.equal(calculateNumber('SUBTRACT', 4.2, 1), 3);
  });
  it('Check output of second rounded number', () => {
    assert.equal(calculateNumber('SUBTRACT', 6, 3.5), 2);
    assert.equal(calculateNumber('SUBTRACT', 4, 1.2), 3);
  });
});

describe('Check output of calculateNumber(type=DIVIDE)', () => {
  it('Returns division of two numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
  });
  it('Check output of first rounded number', () => {
    assert.equal(calculateNumber('DIVIDE', 4.2, 2), 2);
    assert.equal(calculateNumber('DIVIDE', 6.2, 2), 3);
    assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
