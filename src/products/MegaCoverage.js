const Product = require('./Product')

class MegaCoverage extends Product {
    constructor (name, sellIn) {
        super(name, sellIn, 80);
    } 

    calculatePrice(){}

    calculateSellIn(){}

    priceGreaterThanFifty(){}
}

module.exports = MegaCoverage