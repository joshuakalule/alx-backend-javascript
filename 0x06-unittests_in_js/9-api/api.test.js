const request = require('request');
const { expect } = require('chai');

describe('API index page', function() {
  const URL = 'http://localhost:7865';

  it('tests GET /cart/:id when id is number', function (done) {
    const id = 23;
    request.get(`${URL}/cart/${id}`, (err, res, body) => {
      if (err) {
        done(new Error('error in request'));
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Payment methods for cart ${id}`);
      done();
    });
  });

  it('tests GET /cart/:id when id is not a number', function (done) {
    const id = 'NaN';
    request.get(`${URL}/cart/${id}`, (err, res, body) => {
      if (err) {
        done(new Error('error in request'));
      }
      expect(res.statusCode).to.not.be.equal(200);
      expect(body).to.not.be.equal(`Payment methods for cart ${id}`);
      done();
    });
  });
});
