// Importing Module

// First Way
import {addToCart , totalPrice as Price, totalQuantity} from "./shopping-card.js";

console.log('Importing Module');

addToCart('Donut' , 3);
console.log(Price , totalQuantity);


// Second Way
import * as ShoppingCard from './shopping-card.js';
console.log(ShoppingCard.totalQuantity);
console.log(ShoppingCard.cart)



// Moders Javascript Development : (3 Hours 50 Munites) / 2 Hours 41 Munites