const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('testing getPaymentTokenFromAPI', () => {
    it('should resolve promise if success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.eql({data: 'Successful response from the API'});
            done();
        }).catch((err) => {
            done(err);
        });
    });
});