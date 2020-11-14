const {Product,CarInsurance} = require('./coTest');
const productsAtDayZero = [
    
    new Product('Low Coverage', 5, 80),

];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');

    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
}