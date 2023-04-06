'use strict';

function logger(logString) {
    console.log(logString);
}
//
// const age1 = calcAge(1991);
// logger(age1);
// //function declaration -> dürfen vorher schon aufgerufen werden
// function calcAge(birthYear) {
//
//     return 2037 - birthYear;
//
// }
//
// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
//
// const age2 = calcAge2(1991);
// logger(age2);

// Arrow Functions
// const calcAge3 = birthYear => 2037-birthYear;
//
// logger(calcAge3(1982))
//
// const yearsUntilRetirement = birthYear => {
//     const age = 2023 - birthYear;
//     const retirement = 67 - age;
//     return retirement;
// }
//
// logger('Years until retirement: ' + yearsUntilRetirement(1982))

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

logger(fruitProcessor(2,3));
