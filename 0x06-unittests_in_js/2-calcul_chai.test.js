const chai = require('chai');

const calculateNumber = require('./1-calcul.js');

describe('Check output calculateNumber(type=SUM)' , () => {
  it('should return sum of two numbers' , () => {
    chai.expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('Check output of first rounded number', () => {
    chai.expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    chai.expect(calculateNumber('SUM', 4.2, 1)).to.equal(5);
  });
  it('Check output of second rounded number', () => {
    chai.expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
    chai.expect(calculateNumber('SUM', 2, 4.6)).to.equal(7);
  });
});

describe('Check output calculateNumber(type=SUBTRACT)', () => {
  it('Returns subtraction of two numbers', () => {
    chai.expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    chai.expect(calculateNumber('SUBTRACT', 6.5, 3.5)).to.equal(3);
  });
  it('Check output of first rounded number', () => {
    chai.expect(calculateNumber('SUBTRACT', 6.5, 3)).to.equal(4);
    chai.expect(calculateNumber('SUBTRACT', 4.2, 1)).to.equal(3);
  });
  it('Check output of second rounded number', () => {
    chai.expect(calculateNumber('SUBTRACT', 6, 3.5)).to.equal(2);
    chai.expect(calculateNumber('SUBTRACT', 4, 1.2)).to.equal(3);
  });
});

describe('Check output of calculateNumber(type=DIVIDE)', () => {
  it('Returns division of two numbers', () => {
    chai.expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    chai.expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
  });
  it('Check output of first rounded number', () => {
    chai.expect(calculateNumber('DIVIDE', 4.2, 2)).to.equal(2);
    chai.expect(calculateNumber('DIVIDE', 6.2, 2)).to.equal(3);
    chai.expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});
