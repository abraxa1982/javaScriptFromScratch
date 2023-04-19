'use strict';

function logger(logString) {
    console.log(logString);
}

const friends = ['Michael', 'Steven', 'Peter'];
logger(friends);
console.log(friends[0]);

const years = new Array(1992, 1982, 1969, 2002, 2010, 2018);
logger(years.length);

//letzter Inhalt
logger(friends[friends.length-1]);

friends[2] = 'Jane';

logger(friends)

const calcAge = function (birthYear) {
    return 2032 - birthYear;
}


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1, age3, age2);

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length-1])
]
console.log(ages)
