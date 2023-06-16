'use strict';

console.log(me);
// console.log(job);
// console.log(year);

console.log(addDecl(2,3));
// console.log(addExpr(4,5));
// console.log(addArrow(5,5));

var me = "Meike";
let job = 'Developer';
const year = 1982;

function addDecl(a,b) {
    return a+b;
}

const addExpr = function (a,b) {
    return a+b;
};

const addArrow = (a,b) => a+b;


// Example

if (!numProduct) deleteShoppingCard();

var numProduct = 10;

function  deleteShoppingCard() {
    console.log('All Products deleted');
}


//Best Practices -> don't use var, use const or let
// Variables declaration at the top of the code
// after that all funtions and only after all that the Rest of the code


var x = 1;
let y= 2;
const z = 3;
