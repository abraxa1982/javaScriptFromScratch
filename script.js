// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
//     BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
//     1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
//     Test data:
//     § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
//     GOOD LUCK 😀

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
//     Your tasks:
//     1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
//     GOOD LUCK 😀


/*// Type Conversion
const inputYear= "1991";
console.log(Number(inputYear)+18);
console.log(inputYear+18);

console.log(Number("Meike"));

console.log(String(23), 23);

//Type coercion
console.log('I am ' + 41 + ' years old');
console.log('I am ' + '41' + ' years old');
// console.log('I am ' + String(41) + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' +3);
console.log('23' * '10');
console.log('23' /  '10');

let n = '1' + 1;
n = n - 1;
console.log(n);*/

// 5 falsy values: 0, '', undefined, null, NaN -> Sind nicht false aber werden dazu konvertiert, alles andere wird true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Meike'));
console.log(Boolean({}));

//coercion passiert bei if/else und bei boolean Operators

const money = 0;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height; // undefined
height = 123; //defined
height = 0; //gibt undefined aus in der schleife, weill 0 falsy ist


if (height) {
    console.log('height is defined');
} else {
    console.log('height is undefined');
}
