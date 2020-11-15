const Product = require('./Product')

class MediumCoverage extends Product {
    constructor (name, sellIn, price) {
        super(name, sellIn, price);
    } 
}

module.exports = MediumCoverage