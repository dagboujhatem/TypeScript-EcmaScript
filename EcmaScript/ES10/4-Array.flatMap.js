// The flatMap() method first maps all elements of an Array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr) // [ 2, 4, 6, 8, 10, 12 ]
