'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = [
    'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
];

const openingHours= {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced object literals -> no need to assign when it has the same name
  // openingHours,
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

  //new Syntax since ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //old Syntax
  orderDelivery: function({starterIndex =1, mainIndex = 0, time='20:00', address}) {
    console.log(
        `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
  },

  oderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}.`)
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// console.log(restaurant.openingHours.mon.open);//mon is undefined, open will get an error
//if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri.open) console.log(restaurant.openingHours.fri.open);

//With optional chaining
//console.log(restaurant.openingHours.mon?.open); // When before questionmark exists, the rest is read, else will undefined be returned
// console.log(restaurant.openingHours.mon.open);//error-again

//console.log(restaurant.openingHours?.mon?.open); //When openingHours not exists.  in PHP ab 8 : $customer->getAddress()?->getCoordinates()->getLongitude()->format();

//
// const days = [
//   'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
// ];
//
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }
//
// //Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist')
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist')
//
// //Arrays
// const users = [
//   {name: "Meike", email: "aa@bb.de"},
//   {name: "Meike2", email: "aa@bb.de"}
// ];
// console.log(users[0]?.name ?? 'User array empty');
//


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for (const item of menu) console.log(item);
//
// for (const [i, el] of menu.entries()) {
//   console.log(`${i} : ${el}`);
// }

//PropertyNames
const properties =Object.keys(openingHours);
console.log(properties);

let openString = `we are open on ${properties.length} days : `;

for (const day of properties) {
  openString += `${day}, `
}

console.log(openString);

// PropertyValues

const values = Object.values(openingHours);
console.log(values)

//Popoerty Entries

const entries = Object.entries(openingHours);
for (const [key, {open, close}] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
