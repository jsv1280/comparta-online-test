const Product = require('./Product')

class MegaCoverage extends Product {
    constructor (name, sellIn, price) {
        super(name, sellIn, 80);
    } 

    calculatePrice(){}

    calculateSellIn(){}

    priceGreaterThanFifty(){}
}

module.exports = MegaCoverage