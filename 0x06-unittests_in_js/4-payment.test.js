const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber to perform the math', async () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    const result = await sendPaymentRequestToApi(100, 20);
    chai.expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    chai.expect(result).to.equal(10);
    chai.expect(spy.calledWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
