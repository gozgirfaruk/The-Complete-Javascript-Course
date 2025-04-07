// Exporting Module
console.log('Exporting Module');

const choppingCost = 10;
export const cart = [];

 const addToCart = function(product, quantity){
    cart.push({product,quantity});
    console.log(`x${quantity} ${product} added to cart`);
};


const totalPrice = 247;
const totalQuantity = 24;

export {totalPrice , totalQuantity};
export {addToCart};