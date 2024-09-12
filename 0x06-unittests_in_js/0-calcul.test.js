const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("tests the method calculateNumber", function () {
  it("tests a rounded", function () {
    const test1 = calculateNumber(2.2, 3);
    assert.strictEqual(test1, 5, '2.2 + 3.1 should be equal to 5');
  });

  it("tests b rounded", function () {
    const test1 = calculateNumber(2, 3.1);
    assert.strictEqual(test1, 5, '2.2 + 3.1 should be equal to 5');
  });

  it("tests both rounded", function () {
    const test1 = calculateNumber(2.2, 3.1);
    assert.strictEqual(test1, 5, '2.2 + 3.1 should be equal to 5');
  });
});
