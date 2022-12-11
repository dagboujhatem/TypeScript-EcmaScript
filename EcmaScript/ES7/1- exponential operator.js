// The exponentiation operator (**) raises the first operand to the power of the second operand.
// NOTE: x ** y produces the same result as Math.pow(x, y):

let x = 2;
let z = Math.pow(x,10); // 1024

let r = x ** 10; // 1024

console.log({z,r})


// Exponentiation Assignment
// The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.

let k = 2;
k **= 10;

console.log({k})