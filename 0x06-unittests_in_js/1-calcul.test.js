const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('tests the method calculateNumber', function () {
  describe('test when type is SUM', function () {
    const type = 'SUM';
    it('tests a rounded', function () {
      const test1 = calculateNumber(type, 2.2, 3);
      assert.strictEqual(test1, 5, '2.2 + 3.1 should be equal to 5');
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber(type, 2, 3.1);
      assert.strictEqual(test1, 5, '2.2 + 3.1 should be equal to 5');
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber(type, 2.2, 3.1);
      assert.strictEqual(test1, 5, '2.2 + 3.1 should be equal to 5');
    });
  });

  describe('test when type is SUBTRACT', function () {
    const type = 'SUBTRACT';
    it('tests a rounded', function () {
      const test1 = calculateNumber(type, 2.2, 3);
      assert.strictEqual(test1, -1, '2.2 - 3.1 should be equal to -1');
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber(type, 2, 3.1);
      assert.strictEqual(test1, -1, '2.2 - 3.1 should be equal to -1');
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber(type, 2.2, 3.1);
      assert.strictEqual(test1, -1, '2.2 - 3.1 should be equal to -1');
    });
  });

  describe('test when type is DIVIDE', function () {
    const type = 'DIVIDE';
    it('tests a rounded', function () {
      const test1 = calculateNumber(type, 10.2, 2);
      assert.strictEqual(test1, 5);
    });

    it('tests b rounded', function () {
      const test1 = calculateNumber(type, 10, 2.3);
      assert.strictEqual(test1, 5);
    });

    it('tests both rounded', function () {
      const test1 = calculateNumber(type, 10.2, 1.8);
      assert.strictEqual(test1, 5);
    });

    it('tests when b rounds to zero', function () {
      assert.strictEqual(calculateNumber(type, 10.2, 0.3), 'Error');
      assert.strictEqual(calculateNumber(type, 10.2, -0.2), 'Error');
      assert.strictEqual(calculateNumber(type, 10.2, 0), 'Error');
    });
  });
});
