const Product = require('./Product')

class FullCoverage extends Product {
    constructor (name, sellIn, price) {
        super(name, sellIn, price);
    }

    calculatePrice(){
        this.price++;
        this.priceGreaterThanFifty();
    }

    calculateSellIn(){

        this.sellIn--;

        if(this.sellIn < 0){
            this.price++;
        }
    }
     
}

module.exports = FullCoverage