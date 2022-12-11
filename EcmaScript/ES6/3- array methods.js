// 1. find() method
// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12



// 2. findIndex() method
// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

const array2 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array2.findIndex(isLargeNumber));
// expected output: 3

