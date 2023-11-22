const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./4-payment.js');


describe('sendPaymentRequestToApi function', () => {
    
    it('should call calculateNumber using stub', () => {
        const consoleSpy = sinon.spy(console, 'log');
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

        calculateNumberStub.withArgs('SUM', 100, 20).returns(10);

        sendPaymentRequestToApi(100, 20);
        
        expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.equal(true);
        expect(consoleSpy.calledOnceWithExactly('The total is: 10'));

        calculateNumberStub.restore();
        consoleSpy.restore();
    })
})