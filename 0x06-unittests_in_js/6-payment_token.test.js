const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should test the result when passed with arg == true', function () {
    getPaymentTokenFromAPI(true)
    .then((response) => {
      expect(response).to.deep.equal({ data: 'Sucessful responsefrom the API' });
      done();
    });
  });
});
