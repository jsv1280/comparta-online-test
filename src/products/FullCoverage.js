const Product = require('./Product')

class FullCoverage extends Product {
    constructor (name, sellIn, price) {
        super(name, sellIn, price);
    }

    calculatePrice(){

        this.price += this.degradationRate();

        if(this.sellIn < 0){
            this.price += this.degradationRate();
        }

        this.priceGreaterThanFifty();
    }     
}

module.exports = FullCoverage