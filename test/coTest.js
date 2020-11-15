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
      new SpecialFullCoverage('Special Full Coverage', 15, 20),
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

  describe("FullCoverage Product",function(){

    it("Increase price",function(){

        const product = new FullCoverage('Full Coverage', 8, 9);
        const container = [
          product
        ];

        const carInsurance = new CarInsurance(container);
        carInsurance.updatePrice();

        expect(carInsurance.products[0].price).to.equal(10);
    });

    it("Increase double price when date has passed",function(){

      const product = new FullCoverage('Full Coverage', 0, 9);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);
      carInsurance.updatePrice();

      expect(carInsurance.products[0].price).to.equal(11);
    });

  });

  describe("SpecialFullCoverage Product",function(){

    it("Increase by two when there are 10 days or less",function(){

      const product = new SpecialFullCoverage('Special Full Coverage', 9, 10);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);
      carInsurance.updatePrice();

      expect(carInsurance.products[0].price).to.equal(12);
    });

    it("Increase by three when there are 5 days or less",function(){

      const product = new SpecialFullCoverage('Special Full Coverage', 4, 15);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);
      carInsurance.updatePrice();

      expect(carInsurance.products[0].price).to.equal(18);
    });

    it("Drop to zero when no more days left",function(){

      const product = new SpecialFullCoverage('Special Full Coverage', 0, 24);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);
      carInsurance.updatePrice();

      expect(carInsurance.products[0].price).to.equal(0);
    });

    it("Increase regular rate for be a FullCoverage Product too",function(){

      const product = new SpecialFullCoverage('Special Full Coverage', 15, 10);
      const container = [
        product
      ];

      const carInsurance = new CarInsurance(container);
      carInsurance.updatePrice();

      expect(carInsurance.products[0].price).to.equal(11);
    });
  });

  describe("Supersale Product",function(){

    it("Degrade price twice as fast as normal products", function(){

      const product = new Supersale('Supersale Product', 8, 10);
      const container = [
          product
      ];

      const carInsurance = new CarInsurance(container);
      carInsurance.updatePrice();

      expect(carInsurance.products[0].price).to.equal(8);

    });
    
  });

});
