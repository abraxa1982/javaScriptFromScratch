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

