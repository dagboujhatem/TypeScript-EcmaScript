// The fromEntries() method creates an object from iterable key / value pairs.

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);

console.log(myObj); 
// { apples: 300, pears: 900, bananas: 500 }