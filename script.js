/*
let js = 'amazing';
// console.log(40+8+23-10);

let firstName = 'Meike';
console.log(firstName);

//Konstante
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myParentsJob = 'some other';
*/

// let 3years = 3 - nicht erlaubt - wie überall, Dollarzeichen sind aber erlaubt
// name ist erlaubt, aber kann zu Fehlern führen

// Primitive Datentypen: Number (immer float quasi), String, Boolean, Undefined (Deklariert aber nicht befüllt),
// Null (wie immer), Symbol (unique und nicht änderbar) und BigInt


/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

// undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// null
console.log(typeof null);
*/
/*let age = 30;

age = 31;

const birthyear = 1992;*/

//var ist veraltet, let nutzen

//Operatoren

const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah)
// 2**3 Ist 2³
console.log(ageJonas * 2, ageJonas / 10, 2 **3 )

const firstname = 'Jonas';
const lastname = 'Irgendwas';

console.log(firstname + ' ' + lastname)

//typeof ist auch ein Operator

// Assignment-Operators

let x = 10+5; // = 15
x += 10; // wie überall sonst auch, gell ;) 25
x *= 4; // 100
x++; // wie überall 101
x--; // 100
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >=  18);

const isFullAge = ageSarah >=  18;
