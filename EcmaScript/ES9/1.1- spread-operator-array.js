// Link of this demo 1 : https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun
// Link of this demo 2 : https://www.javascripttutorial.net/es6/javascript-spread/

// // 1. Copying an array

let fruits1 = ['Apple', 'Orange', 'Banana'];

let newFruitArray = [...fruits1];

console.log(newFruitArray); // ['Apple','Orange','Banana']

// // 2. Concatenating arrays

let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z'] ( Like : Array.prototype.concat())

// // 3. Spreading elements together with an individual element

let fruits = ['Apple', 'Orange', 'Banana'];

let newFruits = ['Cherry', ...fruits];

console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana'] (Like : Array.prototype.unshift())

let newFruits2 = [...fruits, 'Cherry'];

console.log(newFruits); // ['Apple','Orange','Banana', 'Cherry'] (Like : Array.prototype.push())

// // 4. Spreading elements on function calls

let fruitsArray = ['Apple', 'Orange', 'Banana'];

var getFruits = (f1, f2, f3) => {
    console.log(`Fruits: ${f1}, ${f2} and ${f3}`);
};

getFruits(...fruitsArray); // Fruits: Apple, Orange and Banana

// // 5. Spreading elements on Math call

const numbersArray = [1, 10, 45, 10, 12, 8]
const maxValue = Math.max(...numbersArray); // Math.max : take list of number like Math.max(1,2,3)
const minValue = Math.min(...numbersArray); // Math.min : take list of number like Math.min(1,2,3)

console.log({maxValue, minValue}) // { maxValue: 45, minValue: 1 }


// // 6. JavaScript spread operator and strings

let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

// // 7. Using the Spread Operator With Strings
const foo = "jumanji";
const bar = [...foo];

console.log(bar); // [ "j", "u", "m", "a", "n", "j", "i" ]

// // 8. Converting NodeList to Array
// The spread operator can convert NodeList and arguments objects to arrays, such as when selecting HTML elements on the page:
const arrayOfNodes = [...document.querySelectorAll('div')]

