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

describe('Available payments endpoint', () => {
  const endpoint = {
    url: 'http://localhost:7865/available_payments',
    method: 'GET'
  };
  it('should return an object', (done) => {
    request(endpoint, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  const endpoint = {
    url: 'http://localhost:7865/available_payments',
    method: 'GET'
  };
  it('should return a JSON object when parsed', (done) => {
    request(endpoint, (err, res, body) => {
      const jsonParsed = JSON.parse(body);
      const objBody = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        },
      };
      expect(res.statusCode).to.equal(200);
      expect(jsonParsed).to.deep.equal(objBody);
      done();
    });
  });
});

describe('test for login endpoint', () => {
  it('should return statusCode(200) and welcome username string', (done) => {
    const endpoint = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Betty',
      },
    };
    request(endpoint, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('test for login endpoint', () => {
  it('should return statusCode(200) and welcome username undefined', (done) => {
    const endpoint = {
      url: 'http://localhost:7865/login',
      method: 'POST',
    };
    request(endpoint, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});