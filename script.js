'use strict';

function logger(logString) {
    console.log(logString);
}

const age1 = calcAge(1991);
logger(age1);
//function declaration -> dürfen vorher schon aufgerufen werden
function calcAge(birthYear) {

    return 2037 - birthYear;

}

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
logger(age2);
