const expect = require('chai').expect;

const coTest = require('../src/coTest');
const testProduct = require('../src/products');
const CarInsurance = coTest.CarInsurance;
const { 
  FullCoverage,
  LowCoverage,
  MegaCoverage,
  SpecialFullCoverage,
  Supersale,
  MediumCoverage }  = testProduct

describe("Testing Car Business Logic ",function(){

  const products = [

    new MediumCoverage('Medium Coverage', 10, 20),
    new FullCoverage('Full Coverage', 2, 0),
    new LowCoverage('Low Coverage', 5, 7),
    new MegaCoverage('Mega Coverage', 0, 80),
    new MegaCoverage('Mega Coverage', -1, 80),
    new SpecialFullCoverage('Special Full Coverage', 15, 20),
    new SpecialFullCoverage('Special Full Coverage', 10, 49),
    new SpecialFullCoverage('Special Full Coverage', 5, 49),
    new Supersale('Super Sale', 3, 6)

  ];

  describe("Properties sellIn and price Product classes", function() {

    products.forEach(product => {
      it(` in ${product.name} `, function(){
          expect(product).to.have.property('sellIn');
          expect(product).to.have.property('price');
      })
    })
  
  });

})
