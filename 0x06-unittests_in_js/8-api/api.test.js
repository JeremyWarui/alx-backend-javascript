const { expect } = require('chai');
const request = require('request');
const endpoint = {
    url: 'http://localhost:7865',
    method: 'GET'
};

describe('Test API', () => {
  it('should return 200 as status code', (done) => {
    request(endpoint, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});