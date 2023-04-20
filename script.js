'use strict';

function logger(logString) {
    console.log(logString);
}

const friends = ['Michael', 'Steven', 'Peter'];
// logger(friends);
// console.log(friends[0]);
//
// const years = new Array(1992, 1982, 1969, 2002, 2010, 2018);
// logger(years.length);
//
// //letzter Inhalt
// logger(friends[friends.length-1]);
//
// friends[2] = 'Jane';
//
// logger(friends)
//
// const calcAge = function (birthYear) {
//     return 2032 - birthYear;
// }
//
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
//
// console.log(age1, age3, age2);
//
// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[years.length-1])
// ]
// console.log(ages)


// add elements
const newLength = friends.push('Nadine');
friends.unshift('inga');
console.log(friends);

console.log(newLength);

//remove elements

const popped = friends.pop();
console.log(friends)
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));//<-- nicht da, ergibt -1

friends.push(23);
console.log(friends.includes('Bob'));
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
} else {
    console.log('You have no friend called Peter');
}
