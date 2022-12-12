// This upgrade will allow us to use the d character to specify that we want to get the indices (starting and ending) of the matches of our RegExp

// before ES13

// const fruits = "Fruits: apple, banana, orange";
// const regex = /(banana)/g;

// const matchObj = regex.exec(fruits);

// console.log(matchObj);
// // [
// //   'banana',
// //   'banana',
// //   index: 15,
// //   input: 'Fruits: apple, banana, orange',
// //   groups: undefined
// // ]

// After ES13

const fruits = "Fruits: apple, banana, orange";
const regex = /(banana)/dg;  // Add 'd' Here

const matchObj = regex.exec(fruits);

console.log(matchObj);
// [
//   'banana',
//   'banana',
//   index: 15,
//   indices:[
//      [15, 21],
//      [15, 21]
//   ]
//   input: 'Fruits: apple, banana, orange',
//   groups: undefined
// ]
