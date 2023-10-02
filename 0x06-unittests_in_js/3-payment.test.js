const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber to perform the math', async () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const result = await sendPaymentRequestToApi(100, 20);
    chai.expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    chai.expect(result).to.equal(Utils.calculateNumber('SUM', 100, 20));
    spy.restore();
  });
});
