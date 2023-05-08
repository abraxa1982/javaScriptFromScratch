// // Coding Challenge #2
// // Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// // the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// // 20%.
// // Your tasks:
// //     1. Write a function 'calcTip' that takes any bill value as an input and returns
// // the corresponding tip, calculated based on the rules above (you can check out
// // the code from first tip calculator challenge if you need to). Use the function
// // type you like the most. Test the function using a bill value of 100
// // 2. And now let's use arrays! So create an array 'bills' containing the test data
// // below
// // 3. Create an array 'tips' containing the tip value for each bill, calculated from
// // the function you created before
// // 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// // Test data: 125, 555 and 44
// // Hint: Remember that an array needs a value in each position, and that value can
// // actually be the returned value of a function! So you can just call a function as array
// // values (so don't store the tip values in separate variables first, but right in the new
// // array) 😉
// // GOOD LUCK 😀
//
// function calcTip(billValue) {
//     let tip;
//
//     if(billValue<=50 || billValue >= 300) {
//         tip = (billValue/100)*20
//     } else {
//         tip = (billValue/100)*15
//     }
//     return tip;
// }
//
// console.log(calcTip(100));
//
// const bills = [
//     125,
//     555,
//     44
// ];
//
// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2])
//     ];
//
// console.log(tips);
//
// const totals = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2],
// ];
// console.log(totals);
/*

const meike = {
    firstName: 'Meike',
    lastName: 'Ziesecke',
    age: 2037-1982,
    job: 'developer',
    friends: ['Nadine', 'Inga', 'Claudia']
}
console.log(meike['firstName']);
console.log(meike.lastName);

const nameKey = 'Name';

console.log(meike['first' + nameKey])

const interestedIn = prompt('What are you interested in? Cheosse between firstNam, lastName, age, job and friends:');

if(meike[interestedIn]) {
    console.log(meike[interestedIn]);
} else {
    console.log("Wrong request");
}

meike.location = 'Germany';
meike['twitter'] = '@meikeZB';
console.log(meike);

const output = `${meike.firstName} has ${meike.friends.length} friends and the best friend is ${meike['friends'][0]}.`;
console.log(output);
*/
// const meike = {
//     firstName: 'Meike',
//     lastName: 'Ziesecke',
//     birthYear: 1982,
//     job: 'developer',
//     friends: ['Nadine', 'Inga', 'Claudia'],
//     hasDriversLicense: true,
//
//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age= 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
//     }
// }
// console.log(meike.calcAge());
// console.log(meike.getSummary());

/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
    / (height * height) (mass in kg and height in meter)
Your tasks:
    1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
    GOOD LUCK 😀*/
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         return this.mass / (this.height * this.height);
//     }
// }
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         return this.mass / (this.height * this.height);
//     }
// }
//
// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})`);
// } else if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is lower than ${john.fullName}'s BMI (${john.calcBMI()})`)
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is the same as ${john.fullName}'s BMI (${john.calcBMI()})`)
// }
//
// for (let rep =0; rep <= 10; rep++) {
//     console.log('Lifting wheight repitition ' + rep)
// }

const meike = [
    'Meike',
    'Ziesecke',
    2037-1982,
    'developer',
     ['Nadine', 'Inga', 'Claudia']
];
// let types = [];
//
// for (let i = 0; i < meike.length ;i++) {
//     console.log(meike[i]);
//     // types[i]=typeof meike[i];
//     types.push(typeof meike[i]);
// }
//
// console.log(types)
//
// const years = [1991, 2007, 1969, 2020];
//
// const ages = [];
//
// for (let i = 0; i<years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

for (let i = 0; i < meike.length ;i++) {
    if( typeof meike[i] !== 'string') {
        continue;
    }
    console.log(meike[i]);
}

for (let i = 0; i < meike.length ;i++) {
    if( typeof meike[i] === 'number') {
        break;
    }
    console.log(meike[i]);
}
