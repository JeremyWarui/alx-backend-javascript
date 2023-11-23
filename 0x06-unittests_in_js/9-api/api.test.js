const { expect } = require('chai');
const request = require('request');

describe('Test API', () => {
  const endpoint = {
    url: 'http://localhost:7865',
    method: 'GET'
  };
  it('should return 200 as status code and correct body content', (done) => {
    request(endpoint, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Regex integration test', () => {
  const endpoint = {
    url: 'http://localhost:7865/cart/12',
    method: 'GET'
  };
  it('should return id as 12 and cart content string', (done) => {
    request(endpoint, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});

describe('Regex integration test', () => {
  const endpoint = {
    url: 'http://localhost:7865/cart/12a',
    method: 'GET'
  };
  it('should return a 404 statusCode for a non-number id', (done) => {
    request(endpoint, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});