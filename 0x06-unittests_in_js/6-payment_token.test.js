const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test async tests with done', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.include({ data: 'Successful response from the API' });
      done();
    }).catch((error) => done(error));
  });
});
