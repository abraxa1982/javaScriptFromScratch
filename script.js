'use strict';

function calcAge(birthYear) {
    const age =  2037 - birthYear;

    function printAge() {
        let output = `${firstname} is ${age}, born in ${birthYear}`;
        console.log(output)

        if(birthYear >= 1981 && birthYear <= 1996) {
            const firstname = 'Paula'; //Weil erst hier gesucht wird. Ist aber für mein Empfinden unsauber.

            output = 'New Output!';
            var millennial = true;
            const str = `Oh, you're a millenial ${firstname}`;
            console.log(str);

            function add(a,b) {
                return a+b;
            }
        }
        // console.log(str);
        console.log(millennial);
        // console.log(add(4,5)); - würde funktionieren, wenn strict Mode aus wäre
        console.log(output);
    }

    printAge();
    return age
}



const firstname = 'Meike';

calcAge(1982);
// console.log(age);
// printAge();
