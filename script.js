// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = 23;

if (x === 23) console.log(23);*/

/*
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celsius: ')
    }

    const kelvin = measurement.value +273;
debugger;
    return kelvin;
};

console.log(measureKelvin());
*/
//
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
//     1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
//     Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

const printForecast = function(data) {
    if (typeof(data) === 'object') {
        let text = '';
        for(let i=0; i<data.length; i++ ) {
            text += `... ${data[i]}°C in ${i + 1} days`
        }
        return text;
    } else {
        return 'no array inserted';
    }
}

console.log(printForecast([12, 5, -5, 0, 4]));
