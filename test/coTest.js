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

  describe("Properties sellIn and price Product classes", function() {

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

    products.forEach(product => {
      it(` in ${product.name} `, function(){
          expect(product).to.have.property('sellIn');
          expect(product).to.have.property('price');
      })
    })
  
  });

  describe("Lower sellIn and price Low Coverage", function() {
    
    it("Low Products", function(){

      const product = new LowCoverage('Low Coverage', 5, 7);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);

      carInsurance.updatePrice();

      expect(carInsurance.products[0].sellIn).to.equal(4);
      expect(carInsurance.products[0].price).to.equal(6);
    });

    it("Sell By Date passed normal products degrade twice as fast",function(){

      const product = new LowCoverage('Low Coverage', 0, 10);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);

      carInsurance.updatePrice();

      expect(carInsurance.products[0].price).to.equal(8);

    })

    it("Price never negative",function(){

      const product = new LowCoverage('Low Coverage', 2, 0);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);

      carInsurance.updatePrice();
     
      expect(carInsurance.products[0].price).to.equal(0);

    });

    it("Price never more than 50 negative",function(){

      const product = new LowCoverage('Low Coverage', 5, 120);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);

      carInsurance.updatePrice();
     
      expect(carInsurance.products[0].price).to.equal(50);

    })

    it("Medium Products", function(){
      
      const product = new MediumCoverage('Medium Coverage', 8, 9);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);
      carInsurance.updatePrice();

      expect(carInsurance.products[0].sellIn).to.equal(7);
      expect(carInsurance.products[0].price).to.equal(8);
    });

    it("Mega Coverage never decrease in price", function(){
      
      const product = new MegaCoverage('Mega Coverage', 8);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);
      carInsurance.updatePrice();

      expect(carInsurance.products[0].price).to.equal(80);
  
    })

  }); 

})
