const request = require('request');
const { expect } = require('chai');

describe('API index page', function() {
  const URL = 'http://localhost:7865';

  it('tests GET /', function (done) {
    request.get(`${URL}/`, (err, res, body) => {
      if (err) {
        done(new Error('error in request'));
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('tests GET /cart/23', function (done) {
    request.get(`${URL}/cart/23`, (err, res, body) => {
      if (err) {
        done(new Error('error in request'));
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Payment methods for cart 23`);
      done();
    });
  });

  it('tests GET /cart/NaN', function (done) {
    request.get(`${URL}/cart/NaN`, (err, res, body) => {
      if (err) {
        done(new Error('error in request'));
      }
      expect(res.statusCode).to.not.be.equal(200);
      done();
    });
  });

  it('tests GET /cart/892-567-334', function (done) {
    request.get(`${URL}/cart/892-567-334`, (err, res, body) => {
      if (err) {
        done(new Error('error in request'));
      }
      expect(res.statusCode).to.not.be.equal(200);
      done();
    });
  });

  it('tests GET /cart/starrynight', function (done) {
    request.get(`${URL}/cart/starrynight`, (err, res, body) => {
      if (err) {
        done(new Error('error in request'));
      }
      expect(res.statusCode).to.not.be.equal(200);
      done();
    });
  });
});
