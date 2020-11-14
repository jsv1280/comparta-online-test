class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    lowPrice(){
        
        this.price--;

        this.priceNegative();
        this.priceGreaterThanFifty();
    }

    lowSellIn(){

        this.sellIn--;
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


class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }
    updatePrice() {
        
        for (var i = 0; i < this.products.length; i++) {

            this.products[i].priceNegative();
            this.products[i].priceGreaterThanFifty();

            this.products[i].lowSellIn();
            this.products[i].lowPrice();
        }

        return this.products;
    }
}

module.exports = {
    Product,
    CarInsurance
}