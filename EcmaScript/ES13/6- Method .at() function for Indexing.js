// Access to the Nth item from the end of an Array
// Link: https://plainenglish.io/blog/latest-es13-javascript-features

// Before ES13

// const arr = [100, 200, 300, 400];
// arr[0]; // 100
// arr[arr.length - 2]; // 300
// arr.slice(-2)[0]; // 300

// After ES13 
const arr = [100, 200, 300, 400];
arr.at(0); // 100
arr.at(-2); // 300

const str = "ABCD";
str.at(-1); // 'D'
str.at(0); // 'A'