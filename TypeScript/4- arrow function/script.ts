// Part 1: function declaration in all EcmaScript version

/* 90s ==> => 1997(ES1) & 1998(ES2) & 1999(ES3)*/
// function sayHi(userName) {
//     console.log('Hi ' + userName);
// }

// /* 2000s => 2009 (ES5)*/
// var sayHi = function (userName) {
//     console.log('Hi ' + userName);
// };

// /* 2015 => (ES6) */
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
// Example 1: If your function recive ONLY ONE argument ==> so you can delete the parentheses. 
const printMyNameV1 = name => {
    console.log(name);
}

// Example 2: If your function recive zero argument ==> parentheses are required
const printMyNameV2 = () => {
    console.log("Hatem");
}

// Example 3: If your function recive MORE THAN ONE argument ==> parentheses are required
const printMyNameV3 = (firstName: string, lastName: string) => {
    console.log(`Hi ${firstName} ${lastName}`);
}


// Part 3 : the return statement
const multiply = (n: number) => {
    return n * 2
}

// you can delete the return statement & write your function in ONE LINE if you have ONLY the return statement in your body of this function (i.e only ONE instruction)
// shortcut function without the return statement
const multiplyV2 = (n: number) =>  n * 2;