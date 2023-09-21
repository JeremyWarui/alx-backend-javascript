const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  it('should return a welcome message', (done) => {
    const call = {
      url: 'http://localhost:7865',
      method: 'GET',
    };
    request(call, (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('/cart/12', () => {
  it('should response with 200 and id 12 in message', (done) => {
    const call = {
      url: 'http://localhost:7865/cart/12',
      method: 'GET',
    };
    request(call, (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});

describe('/cart/ab2', () => {
  it('should response with 404', (done) => {
    const call = {
      url: 'http://localhost:7865/cart/ab2',
      method: 'GET',
    };
    request(call, (error, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
