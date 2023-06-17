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

const meike = {
    birthYear: 1982,
    firstName: 'meike',
    calcAge: function () {
        console.log(2037 - this.birthYear);
        // Solution 1 vor ES6
        // const self = this; //um das Funktionsaufruf-Problem zu umgehen, alte Version
        // const isMillennial = function() {
        //     //console.log(this.birthYear >= 1981 && this.birthYear<= 1996); //Warum macht man eine Funktion in einer Funktion? Hä?
        //     console.log(self.birthYear >= 1981 && self.birthYear<= 1996); //Warum macht man eine Funktion in einer Funktion? Hä?
        // };

        const isMillennial = () => console.log(this.birthYear >= 1981 && this.birthYear<= 1996); //Warum macht man eine Funktion in einer Funktion? Hä?

        isMillennial(); // in einem regulären Funktionsaufruf ist this "undefined"
    },
    greet: () => console.log(`Hey ${this.firstName}!`) //In Arrow Function there is no own this Keyword, it will use the this keyword of the parent
    // greet: function() {
    //     console.log(`Hey ${this.firstName}!`)
    // }

};
meike.greet();
meike.calcAge()

//Arguments Keyword
const addExpr = function (a,b) {
    console.log(arguments)
    return a+b;
};
addExpr(2,5)
addExpr(2,5,4,3) //Wie absurd ist das hier einfach mehr hinzufügen zu dürfen? Alter!

const addArrow = (a,b) => {
    // console.log(arguments) //Keine Arguments in Arrow Functions
    return a+b;
};
addArrow(2,3);
addArrow(2,3,4,5)
