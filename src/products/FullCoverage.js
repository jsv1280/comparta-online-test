const Product = require('./Product')

class FullCoverage extends Product {
    constructor (name, sellIn, price) {
        super(name, sellIn, price);
    }

    calculatePrice(){
        this.price += this.degradationRate();
        this.priceGreaterThanFifty();
    }

    calculateSellIn(){

        this.sellIn--;

        if(this.sellIn < 0){
            this.price += this.degradationRate();
        }
    }
     
}

module.exports = FullCoverage