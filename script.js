'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex =1, mainIndex = 0, time='20:00', address}) {
    console.log(
        `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
  },

  oderPasta: function(ing1, ing2, ing3) {
    console.log(`here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}.`)
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//use any data type, return any data type
//short circuiting (if the first Value is a truthy Value, it will immediatly return the value, else ist will return the second
console.log('-------OR-------')
console.log(3 || 'Meike'); // 3
console.log('' || 'Meike'); // Meike
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null );

//problematisch wenn numGuests 0 wäre
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;

console.log(guests1, guests2);
//and -> returns the first falsy value or the last if they all are true
console.log('-------AND-------')
console.log(0 && 'Meike'); // 0
console.log(3 && 'Meike'); // Meike
console.log('Hello' && 23 && null && 'Meike'); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza &&restaurant.orderPizza('Onions', 'Cheese');

console.log('-------Nullish Coalescing Operator-------')
// Nullish: null and undefined -> 0 und '' sind nicht falsy
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// // Spread -> unpack an array, REST -> pack Element to an array --- both are ...
// // SPREAD because on Right side of =
// const arr = [1,2,...[3,4]]; //Spread ->
// // Rest, on the left hab of the =
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);
//
// //rest element muss das letzte Element sein, weil es den Rest einsammelt
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood)
//
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays)
//
// //Functions - immt viele Werte entgegen und wirft sie in ein array
//
// const add = function(...numbers) {
//   let sum = 0;
//   for(let i=0; i<numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }
//
// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);
//
// const x=[23,5,7];
// add(...x);
//
// restaurant.orderPizza('mushrooms', 'onion', 'mangold', 'brokkoli');
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Altendeicher Chaussee 98',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // })
// //
// // restaurant.orderDelivery({starterIndex:3, address:'Klevendeicher Chaussee 27'});
// // /*
//
// /*const arr = [2,3,4];
// const [x,y,z] = arr; //destructuring, not destroying
// console.log(x,y,z)
//
// let [main, , secondary] = restaurant.categories;
// console.log(main,secondary);
//
// [main, secondary] = [secondary, main]; //to switch the variables
// console.log(main,secondary);
//
// console.log(restaurant.order(2,0));
// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);
//
// //Nested Destructing
// const nested = [2,4,[5,6]];
// const [i,,[j,k]] = nested;
// console.log(i,j,k);
//
// //Default Values
// const [p = 1, q = 1, r = 1] = [8,9];
// console.log(p,q,r);
// */
// //
// // const {name, openingHours, categories} = restaurant; //die namen müssen die der properties im Objekt sein
// // console.log(name, openingHours, categories);
// //
// // //Change Vaiables
// // const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// // console.log(restaurantName, hours, tags);
// //
// // //Default values
// // const {menu = [], starterMenu: starters = []} = restaurant;
// // console.log(menu, starters);
// //
// // //Mutating Variables
// // let a = 111;
// // let b= 999;
// // const obj = {a:23, b:7, c:14};
// //
// // ({ a,b } = obj); // JS erwartet einen Codeblock wenn die Zeile mit { beginnt, deswegen muss der ganze Bums in Klammern
// //
// // //Nested Objects
// // const {fri: {open, close}} = openingHours;
// // console.log(open, close);
// //
// // const arr = [7,8,9];
// // const badNewArr = [1,2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);
// //
// // const newArr = [1,2, ...arr]; //spread operator, nimm alle Elemente aus dem array und schreibt sie in ein neues
// // console.log(newArr);
// // console.log(...newArr);
// //
// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);
// // const mainMenuCopy = [...restaurant.mainMenu];
// //
// // //join 2 Arrays
// //
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu)
// //
// // //Iterables: arrays, strings, maps, sets. Not Objects
// //
// // const str='Meike';
// // const letters = [...str, ' ', 'Z.'];
// // console.log(letters);
// // console.log(...str);
// // //console.log(`${...str} Z.`) -> geht nicht weil das keine Kommaseparierten Values (mehrere) erwartet
// //
// // // const ingredients = [
// // //     prompt('Let\'s make Pasta! Ingredient 1?'),
// // //   prompt(' Ingredient 2?'),
// // //   prompt(' Ingredient 3?'),
// // // ];
// // // console.log(ingredients);
// // // restaurant.oderPasta(...ingredients);
// //
// // //Seit ES 2018 auch Objects, auch wenn sie keine iterals sind
// //
// // const newRestaurant= {founded: '1998',...restaurant, founder: 'Guiseppe'};
// // console.log(newRestaurant);
// //
// // const restaurantCopy = {...restaurant};
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurantCopy.name, restaurant.name);
