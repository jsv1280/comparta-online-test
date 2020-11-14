class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    calculatePrice(){
        
        this.price--;

        this.priceNegative();
        this.priceGreaterThanFifty();
    }

    calculateSellIn(){

        this.sellIn--;

        if(this.sellIn < 0){
            this.price--;
        }
    }

    priceGreaterThanFifty(){

        if(this.price > 50){
            this.price = 50;
        }
    }

    priceNegative(){
        
        if(this.price < 0){
            this.price = 0;
        }
    }
}

module.exports = Product