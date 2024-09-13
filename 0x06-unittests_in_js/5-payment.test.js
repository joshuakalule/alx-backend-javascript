const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToAPI', function () {
  beforeEach(function () {
    this.consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    this.consoleLogSpy.restore();
  });

  describe('called with 100, and 20', function () {
    beforeEach(function () {
      sendPaymentRequestToApi(100, 20);
    });

    it('should verify that console log is logging correctly', function () {
      expect(this.consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should verify that the console is only called once', function () {
      expect(this.consoleLogSpy.calledOnce).to.be.true;
    });
  });

  describe('called with 10, and 10', function () {
    beforeEach(function () {
      sendPaymentRequestToApi(10, 10);
    });

    it('should verify that console log is logging correctly', function () {
      expect(this.consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    });

    it('should verify that the console is only called once', function () {
      expect(this.consoleLogSpy.calledOnce).to.be.true;
    });
  });
});
