'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
};

const {name,openingHours,categories} = restaurant;
const {name:Isim , openingHours:AcilisSaat , categories :Kategori}=restaurant;

console.log(name,Kategori);
console.log(restaurant.location);

const {fri:{open,close}}=openingHours;
console.log(open,close)
// SPREAD,because on RIGHT side of =
const arr = [...restaurant.starterMenu , ...restaurant.mainMenu,'Soups'];
console.log(arr);
// REST, because on LEFT side of =
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

const rest1 = {
  name:'Subway',
  owner: 'Giovanni Rossi',
  numGuest:0
};

const rest2={
  name: 'KFC',
  owner:'Anonymous'
}
//rest1.numGuest = rest1.numGuest ?? 20;
rest1.numGuest||=10;
rest2.owner = rest2.owner && 'Harland Sanders';

console.log(rest1);
console.log(rest2);

for (const item of restaurant.categories.entries())
  console.log(item);

const properties = Object.keys(openingHours);
for(const item of properties){
  console.log(item)
}

// ------------------------------------
// SETS FUNDAMENTALS

const orderSet = new Set([
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Cake',
  'Pizza',
  'Pasta'
]);
console.log(orderSet)
console.log(new Set('Faruk'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Bread');
orderSet.delete('Risotto');
console.log(orderSet);


const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));



