//  Object.entries() returns an array of the key/value pairs in an object:

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const text = Object.entries(person);

console.log(text)

// Object.entries() makes it simple to use objects in loops:
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text2 = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text2 += fruit + ": " + value + "<br>";
}

console.log(text2);

// Object.entries() also makes it simple to convert objects to maps:
const fruitsArray = { Bananas: 300, Oranges: 200, Apples: 500 };

const myMap = new Map(Object.entries(fruitsArray));
console.log(myMap)
