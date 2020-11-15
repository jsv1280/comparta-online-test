const Product = require('./Product')

class MegaCoverage extends Product {
    constructor (name, sellIn, price) {
        super(name, sellIn, price);
    } 

    calculatePrice(){}

    calculateSellIn(){}
}

module.exports = MegaCoverage