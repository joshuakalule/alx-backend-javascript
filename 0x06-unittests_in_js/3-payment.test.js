const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    this.fnSpy = sinon.spy(Utils, "calculateNumber");
    this.a = 10.2;
    this.b = 4.8;

    sendPaymentRequestToApi(this.a, this.b);
    this.expectedResult = Math.round(this.a) + Math.round(this.b);
  });

  afterEach(function () {
    this.fnSpy.restore();
  });

  it('should call calculateNumber', function () {
    expect(this.fnSpy.called).to.be.true;
  });

  it(' should call calculateNumber with right args', function () {
    expect(this.fnSpy.calledWith('SUM', this.a, this.b)).to.be.true;
  });

  it('should call calculateNumber and return correctly', function () {
    expect(this.fnSpy.returned(this.expectedResult)).to.be.true;
  });
});
