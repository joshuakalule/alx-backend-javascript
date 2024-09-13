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

  describe('using spies', function () {
    beforeEach(function () {
      this.fnSpy = sinon.spy(Utils, 'calculateNumber');
      this.consoleLogSpy = sinon.stub(console, 'log');
      this.a = 10.2;
      this.b = 4.8;

      sendPaymentRequestToApi(this.a, this.b);
      this.expectedResult = Math.round(this.a) + Math.round(this.b);
    });

    afterEach(function () {
      this.fnSpy.restore();
      this.consoleLogSpy.restore();
    });

    it('should call calculateNumber', function () {
      expect(this.fnSpy.called).to.be.true;
    });

    it('should call calculateNumber with right args', function () {
      expect(this.fnSpy.calledWith('SUM', this.a, this.b)).to.be.true;
    });

    it('should call calculateNumber and return correctly', function () {
      expect(this.fnSpy.returned(this.expectedResult)).to.be.true;
    });
  });
});
