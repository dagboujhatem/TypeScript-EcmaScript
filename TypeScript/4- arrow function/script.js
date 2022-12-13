/* 90s ==> 1997(ES1), 1998(ES2), 1999(ES3) */
// function sayHi(userName) {
//     console.log('Hi ' + userName);
// }

// /* 2000s => 2009(ES5)*/
// var sayHi = function (userName) {
//     console.log('Hi ' + userName);
// };

/* 2015 => (ES6) */
const sayHi = (userName) => {
    console.log('Hi ' + userName); 
    // IMPORTANT: No more issues with the "this" keyword!
};

// /* 2018 => (ES9) */
// export function sayHi(userName) {
//     console.log('Hi ' + userName);
// }


// Function call : to be executed
sayHi("Hatem");


// Part 2 : arguments 
// If your function recive ONLY ONE argument : so you can delete the paramenteses
// Example 1
const printMyName = name =>{
    console.log(name);
}

// Example 2: 
const printMyNameV2 = () =>{
    console.log("Hatem");
}

// Example 3:
const printMyNameV2 = () =>{
    console.log("Hatem");
}