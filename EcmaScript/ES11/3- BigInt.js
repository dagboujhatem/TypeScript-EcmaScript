// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a a normal JavaScript Number.

// The problem : 
let x = 999999999999999;
let y = 9999999999999999; // too big
console.log(typeof x) // number

// To create a BigInt, append n to the end of an integer or call BigInt():
let x2 = 1234567890123456789012345n;
let y2 = BigInt(1234567890123456789012345)

console.log(typeof x2) // bigint