// ECMAScript 2017 added two String methods: 
// padStart and padEnd to support padding at the beginning and at the end of a string.

const textOne = "5";
const resultOne = textOne.padStart(4, 0);
console.log({ textOne, resultOne });

const textTwo = "5";
const resultTwo = textTwo.padEnd(4, 0);
console.log({ textTwo, resultTwo });