const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  describe('using stubs', function () {
    beforeEach(function () {
      this.fnStub = sinon.stub(Utils, 'calculateNumber').returns(10);
      this.consoleLogSpy = sinon.stub(console, 'log');

      sendPaymentRequestToApi(100, 20);
      this.expectedResult = 10;
    });

    afterEach(function () {
      this.fnStub.restore();
      this.consoleLogSpy.restore();
    });

    it('ensures calculateNumber is called with right args', function () {
      expect(this.fnStub.calledWith('SUM', 100, 20)).to.be.true;
    });

    it('ensures calculateNumber returns 10', function () {
      expect(this.fnStub.returned(10)).to.be.true;
    });

    it('ensures console log is called correctly', function () {
      expect(this.consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    });
  });
});
