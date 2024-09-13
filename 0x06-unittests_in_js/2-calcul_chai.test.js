import calculateNumber from './2-calcul_chai.js';
import chai from 'chai';
const { expect } = chai;

describe('tests the method calculateNumber', function () {
  describe('test when type is SUM', function () {
    const type = 'SUM';
    it('tests a rounded', function () {
      const test1 = calculateNumber(type, 2.2, 3);
      expect(test1).to.be.equal(5);
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber(type, 2, 3.1);
      expect(test1).to.be.equal(5);
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber(type, 2.2, 3.1);
      expect(test1).to.be.equal(5);
    });
  });

  describe('test when type is SUBTRACT', function () {
    const type = 'SUBTRACT';
    it('tests a rounded', function () {
      const test1 = calculateNumber(type, 2.2, 3);
      expect(test1).to.be.equal(-1);
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber(type, 2, 3.1);
      expect(test1).to.be.equal(-1);
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber(type, 2.2, 3.1);
      expect(test1).to.be.equal(-1);
    });
  });

  describe('test when type is DIVIDE', function () {
    const type = 'DIVIDE';
    it('tests a rounded', function () {
      const test1 = calculateNumber(type, 10.2, 2);
      expect(test1).to.be.equal(5);
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber(type, 10, 2.3);
      expect(test1).to.be.equal(5);
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber(type, 10.2, 1.8);
      expect(test1).to.be.equal(5);
    });

    it('tests when b rounds to zero', function () {
      expect(calculateNumber(type, 10.2, 0.3)).to.be.equal('Error');
      expect(calculateNumber(type, 10.2, -0.2)).to.be.equal('Error');
      expect(calculateNumber(type, 10.2, 0)).to.be.equal('Error');
      expect(calculateNumber(type, 10.2, -0)).to.be.equal('Error');
    });
  });
});
