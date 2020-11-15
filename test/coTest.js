const expect = require('chai').expect;

const coTest = require('../src/coTest');
const testProduct = require('../src/products');
const CarInsurance = coTest.CarInsurance;
const LowCoverage = testProduct.LowCoverage;

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new LowCoverage("foo", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("foo");
  });

});