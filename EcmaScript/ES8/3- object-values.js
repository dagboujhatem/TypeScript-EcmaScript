// Object.values() are similar to Object.entries(), but returns a single dimension array of the object values:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const text = Object.values(person);

console.log(text);