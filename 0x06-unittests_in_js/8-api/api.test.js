const request = require('request');
const { expect } = require('chai');

describe('API index page', function() {
  const URL = 'http://localhost:7865';

  it('ensures GET / returns correct response', function (done) {
    request.get(`${URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
