'use strict';

// //Best Practices -> don't use var, use const or let
// // Variables declaration at the top of the code
// // after that all functions and only after all that the Rest of the code
// // Never Arrow Functions as Method


//
// console.log(me);
// // console.log(job);
// // console.log(year);
//
// console.log(addDecl(2,3));
// // console.log(addExpr(4,5));
// // console.log(addArrow(5,5));
//
// var me = "Meike";
// let job = 'Developer';
// const year = 1982;
//
// function addDecl(a,b) {
//     return a+b;
// }
//
// const addExpr = function (a,b) {
//     return a+b;
// };
//
// const addArrow = (a,b) => a+b;
//
//
// // Example
//
// if (!numProduct) deleteShoppingCard();
//
// var numProduct = 10;
//
// function  deleteShoppingCard() {
//     console.log('All Products deleted');
// }
//
//

//
//
// var x = 1;
// let y= 2;
// const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037-birthYear);
//     console.log(this);
// }
// calcAge(1982)
//
// const calcAgeArrow = birthYear => {
//     console.log(2037-birthYear);
//     console.log(this);
// }
// calcAgeArrow(1980)
//
//
// const meike = {
//     birthYear: 1982,
//     calcAge: function () {
//         console.log(2037 - this.birthYear);
//     }
// }
// meike.calcAge();
//
// const mathilda={
//     birthYear: 2017,
// };
//
// mathilda.calcAge = meike.calcAge;
// console.log(mathilda.calcAge());
//
// const f = meike.calcAge;
//
// f();
//
// const meike = {
//     birthYear: 1982,
//     firstName: 'meike',
//     calcAge: function () {
//         console.log(2037 - this.birthYear);
//         // Solution 1 vor ES6
//         // const self = this; //um das Funktionsaufruf-Problem zu umgehen, alte Version
//         // const isMillennial = function() {
//         //     //console.log(this.birthYear >= 1981 && this.birthYear<= 1996); //Warum macht man eine Funktion in einer Funktion? Hä?
//         //     console.log(self.birthYear >= 1981 && self.birthYear<= 1996); //Warum macht man eine Funktion in einer Funktion? Hä?
//         // };
//
//         const isMillennial = () => console.log(this.birthYear >= 1981 && this.birthYear<= 1996); //Warum macht man eine Funktion in einer Funktion? Hä?
//
//         isMillennial(); // in einem regulären Funktionsaufruf ist this "undefined"
//     },
//     greet: () => console.log(`Hey ${this.firstName}!`) //In Arrow Function there is no own this Keyword, it will use the this keyword of the parent
//     // greet: function() {
//     //     console.log(`Hey ${this.firstName}!`)
//     // }
//
// };
// meike.greet();
// meike.calcAge()
//
// //Arguments Keyword
// const addExpr = function (a,b) {
//     console.log(arguments)
//     return a+b;
// };
// addExpr(2,5)
// addExpr(2,5,4,3) //Wie absurd ist das hier einfach mehr hinzufügen zu dürfen? Alter!
//
// const addArrow = (a,b) => {
//     // console.log(arguments) //Keine Arguments in Arrow Functions
//     return a+b;
// };
// addArrow(2,3);
// addArrow(2,3,4,5)
//
// let age = 41;
// let oldAge = age;
// age = 42;
// console.log(age);
// console.log(oldAge);
//
// const me = {
//     name: 'meike',
//     age: 41
// }
//
// const friend = me;
// friend.age = 27;
//
// console.log('friend: ',friend )
// console.log('me: ', me)

//Primitive Types
let lastname = 'Williams';
let oldLastname = lastname;
lastname = 'Davis';

//Reference Types
const jessica = {
    firstname: 'Jessica',
    lastname: 'Williams',
    age: 27
}

const marriedJessica = jessica;
marriedJessica.lastname = 'Davis'; //Nicht das gewünschte weil Beide nun geändert
console.log(jessica);
console.log(marriedJessica);
// marriedJessica = {} - geht nicht weil const - let würde gehen, ist aber auch nicht was wir wollen


const jessica2 = {
    firstname: 'Jessica',
    lastname: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica2); //Nur erste Ebene wird kopiert, damit Objecte darin wieder nur Adressen....

jessicaCopy.lastname = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);

