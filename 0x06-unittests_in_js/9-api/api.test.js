const request = require('request');
const { expect } = require('chai');

describe('Integration testing', () => {
  describe('index page', () => {
    it('should return a welcome message', (done) => {
      const call = {
        url: 'http://localhost:7865/',
        method: 'GET',
      };
      request(call, (error, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('index page', () => {
    const endpoint = 'http://localhost:7865/cart/124';
    it('should response with 200 and id 124 in message', (done) => {
      request(endpoint, (error, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 124');
        done();
      });
    });
  });

  describe('/cart/:isNaN', () => {
    it('should response with 404', (done) => {
      const call = {
        url: 'http://localhost:7865/cart/abr',
        method: 'GET',
      };
      request(call, (error, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
