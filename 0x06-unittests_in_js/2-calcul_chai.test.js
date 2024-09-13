const calculateNumber = require('./1-calcul');
const chai = require('chai');
const expect = chai.expect;


describe('tests the method calculateNumber', function () {
  describe('type == "SUM"', function () {
    it('tests a rounded', function () {
      const test1 = calculateNumber('SUM', 2.2, 3);
      expect(test1).to.be.equal(5);
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber('SUM', 2, 3.1);
      expect(test1).to.be.equal(5);
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber('SUM', 2.2, 3.1);
      expect(test1).to.be.equal(5);
    });
  });

  describe('test when type is SUBTRACT', function () {
    it('tests a rounded', function () {
      const test1 = calculateNumber('SUBTRACT', 2.2, 3);
      expect(test1).to.be.equal(-1);
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber('SUBTRACT', 2, 3.1);
      expect(test1).to.be.equal(-1);
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber('SUBTRACT', 2.2, 3.1);
      expect(test1).to.be.equal(-1);
    });
  });

  describe('test when type is DIVIDE', function () {
    it('tests a rounded', function () {
      const test1 = calculateNumber('DIVIDE', 10.2, 2);
      expect(test1).to.be.equal(5);
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber('DIVIDE', 10, 2.3);
      expect(test1).to.be.equal(5);
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber('DIVIDE', 10.2, 1.8);
      expect(test1).to.be.equal(5);
    });

    it('tests when b rounds to zero', function () {
      expect(calculateNumber('DIVIDE', 10.2, 0.3)).to.be.equal('Error');
      expect(calculateNumber('DIVIDE', 10.2, -0.2)).to.be.equal('Error');
      expect(calculateNumber('DIVIDE', 10.2, 0)).to.be.equal('Error');
      expect(calculateNumber('DIVIDE', 10.2, -0)).to.be.equal('Error');
    });
  });
});
