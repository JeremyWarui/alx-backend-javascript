const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment.js');

describe('Using hooks', () => {
    let consoleSpy;

    beforeEach(() => consoleSpy = sinon.spy(console, 'log'));
    afterEach(() => consoleSpy.restore())
    it('should log total as 120', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the total as 20', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
})