const FullCoverage = require('./FullCoverage')
const strategyManager = require('../StrategyManager');

class SpecialFullCoverage extends FullCoverage {
    constructor (name, sellIn, price) {
        super(name, sellIn, price);
    }

    calculatePrice(){
        const selectedStrategy = strategyManager.getStrategy(this.sellIn);
        this.price = selectedStrategy.calculatePrice(this.price);

        this.priceNegative();
        this.priceGreaterThanFifty();
    }     
}

module.exports = SpecialFullCoverage