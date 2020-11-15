/**
 * Implementation Strategy Pattern to delegate SpecialFullCoverage price logic
 */
class Strategy {

    /**
     * @param {string} name 
     * @param {function} handler In charge for calculation the new product's price
     * @param {function} validate In charge of choosing the strategy that satifies product's day condition
     */
    constructor(name,handler,validate){
        this._name = name;
        this._handler = handler;
        this._validate = validate;
    }

    /** 
     * Public method that execute handler function
    */
    calculatePrice(price){
        return this._handler(price);
    }

    /** 
     * Public method that execute validate function
    */
    validate(days){
        return this._validate(days);
    }
}

/**
 * Container Class for available calculatePrice in SpecialFullCoverage
 */
class StrategiesSpecialFullCoverage {
    constructor(){
        this._strategies = [];
    }

    addStrategy(strategy){
        this._strategies = [...this._strategies,strategy]
    }

    getStrategy(days){
      
        return this._strategies.find(strategy => strategy.validate(days) );
    }
    
}

const strategyManager = new StrategiesSpecialFullCoverage();

// Implementations from differentes strategies based on day
const IncreaseByOne = new Strategy('IncreaseByOne',(price) => price + 1, (days) => days >= 10);
const IncreaseByTwo = new Strategy('IncreaseByTwo',(price) => price + 2, (days) => days >= 5 && days < 10);
const IncreaseByThree = new Strategy('IncreaseByThree',(price) => price + 3,(days) => days >= 0 && days < 5);
const DropToZero = new Strategy('DropToZero',(price) => 0, (days) => days < 0);

// Add strategies to container class for be accesible in SpecialFullCoverage class
strategyManager.addStrategy(IncreaseByOne);
strategyManager.addStrategy(IncreaseByTwo);
strategyManager.addStrategy(IncreaseByThree);
strategyManager.addStrategy(DropToZero);

module.exports = strategyManager

