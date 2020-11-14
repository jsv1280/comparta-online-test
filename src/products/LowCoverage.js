const Product = require('./Product')

class LowCoverage extends Product {
    constructor (name, sellIn, price) {
        super(name, sellIn, price);
    } 
}

module.exports = LowCoverage