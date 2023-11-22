const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function with type SUM', () => {
  it('should return sum of two integers', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 3, 3)).to.equal(6);
    expect(calculateNumber('SUM', -2, -2)).to.equal(-4);
  });

  it('should return sum of rounded floats', () => {
    expect(calculateNumber('SUM', 1.2, 3.2)).to.equal(4);
    expect(calculateNumber('SUM', 3.5, 3.6)).to.equal(8);
  });

  it('should return sum if one is float', () => {
    expect(calculateNumber('SUM', 3.2, 2)).to.equal(5);
    expect(calculateNumber('SUM', 3.5, 3)).to.equal(7);
  });

  it('should cast non-numbers to numbers and return sum', () => {
    expect(calculateNumber('SUM', '3', 1)).to.equal(4);
    expect(calculateNumber('SUM', '6', 3.5)).to.equal(10);
  });
});

describe('calculateNumber with type SUBTRACT', () => {
  it('should return deducted number of two integers', () => {
    expect(calculateNumber('SUBTRACT', 4, 3)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 5, 1)).to.equal(4);
  });

  it('should return subtracted num of two floats', () => {
    expect(calculateNumber('SUBTRACT', 4.5, 1.2)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 6.5, 5.5)).to.equal(1);
  });

  it('should return subtracted num of one float', () => {
    expect(calculateNumber('SUBTRACT', 4.5, 3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 5.3, 3)).to.equal(2);
  });
});

describe('calculateNumber with type DIVIDE', () => {
  it('should return the quotient of two integers', () => {
    expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
  });

  it('should return an "Error" string when on num of 0', () => {
    expect(calculateNumber('DIVIDE', 6, 0.3)).to.deep.equal('Error');
    expect(calculateNumber('DIVIDE', 4, 0.1)).to.deep.equal('Error');
  });

  it('should return quotient of one/two floats', () => {
    expect(calculateNumber('DIVIDE', 5.5, 2)).to.equal(3);
    expect(calculateNumber('DIVIDE', 6, 2.6)).to.equal(2);
  });
});
