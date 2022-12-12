// 

const text = "Cats playing with balls, all cats is funny.";

// Before ES2020 there was no string method that could be used to search for all occurrences of a string in a string.
const iterator = text.matchAll("Cats");
console.log(Array.from(iterator));

// If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
const iterator2 = text.matchAll(/Cats/g);
console.log(Array.from(iterator2));

// If you want to search case insensitive, the insensitive flag (i) must be set:
const iterator3 = text.matchAll(/Cats/gi);
console.log(Array.from(iterator3));



