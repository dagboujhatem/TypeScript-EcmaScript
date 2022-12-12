// Link of this demo 1 : https://www.javascripttutorial.net/es6/javascript-spread/
// Note that ES6 also has the three dots ( ...) which is a rest parameter that collects all remaining arguments of a function into an array.
// The rest parameters must be the last arguments of a function. However, the spread operator can be anywhere:
// Here are the main differences:
//     - The spread operator (...) unpacks the elements of an iterable object.
//     - The rest parameter (...) packs the elements into an array.

// // 1. The rest parameter in ES9 with 
// used for packs elements into an Array

function f(a, b, ...args) {
	console.log(args); // [ 3, 4, 5 ] : 
}

f(1, 2, 3, 4, 5); 


// // 2. the use of rest operator with an object

const student = {
    age:10,
    height:5,
    weight:50
 }
 const {age,...other} = student;
 console.log(age) // 10
 console.log(other) // {height: 5, weight: 50}