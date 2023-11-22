const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi function', () => {
    
    it('should call calculateNumber', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        
        expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.equal(true);
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

        calculateNumberSpy.restore();
    })
})