const Product = require('./Product')

class Supersale extends Product {
    
    constructor (name, sellIn, price) {
        super(name, sellIn, price);
    }

    degradationRate() { 
        return 2; 
    } 
}

module.exports = Supersale