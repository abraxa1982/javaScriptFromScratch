/*
const firstname = "Meike";
const job = "developer";
const birthYear = 1982;
const year = 2023;

const meike = "I'm " + firstname + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(meike);

//muss mit `` umschlossen werden, nennt sich template String
const meikeNew = `I'm ${firstname}, a ${year - birthYear} years old ${job}.`;
console.log(meikeNew)

console.log('String with \n\ multiple \n\ lines');

console.log(`Another
multiline
String`);

*/
const age = 15;

const requiredAge = 18;
const isOldEnough = age >= requiredAge;

if( age >= requiredAge) {
    console.log('Sarah can start driving license.');
} else {
    let yearsLeft = requiredAge - age;
    console.log(`Sarah is to young, she has to wait another ${yearsLeft} years.`)
}

let birthYear = 1982;
let century; // muss außerhalb des codeblocks definiert werden, sonst ist es außerhalb des codeblocks nicht
             // zugreifbar, auch wenn es in beiden Schleifen definiert ist.

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
