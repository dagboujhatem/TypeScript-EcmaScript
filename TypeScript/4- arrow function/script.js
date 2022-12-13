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
var sayHi = function (userName) {
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
var printMyNameV1 = function (name) {
    console.log(name);
};
// Example 2: If your function recive zero argument ==> parentheses are required
var printMyNameV2 = function () {
    console.log("Hatem");
};
// Example 3: If your function recive MORE THAN ONE argument ==> parentheses are required
var printMyNameV3 = function (firstName, lastName) {
    console.log("Hi ".concat(firstName, " ").concat(lastName));
};
// Part 3 : the return statement
var multiply = function (n) {
    return n * 2;
};
// you can delete the return statement & write your function in ONE LINE if you have ONLY the return statement in your body of this function (i.e only ONE instruction)
// shortcut function without the return statement
var multiplyV2 = function (n) { return n * 2; };
