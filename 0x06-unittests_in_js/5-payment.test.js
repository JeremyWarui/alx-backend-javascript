const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => spy = sinon.spy(console, 'log'));
  afterEach(() => spy.restore());

  it('should use Utils.calculateNumber to perform the math', () => {
    sendPaymentRequestToApi(100, 20);
    chai.expect(spy.calledOnce).to.be.true;
    chai.expect(spy.calledWith('The total is: 120')).to.be.true;
  });
  it('sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    chai.expect(spy.calledOnce).to.be.true;
    chai.expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
