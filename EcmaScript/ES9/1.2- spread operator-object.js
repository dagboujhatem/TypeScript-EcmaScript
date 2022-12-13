// // 1. Spread syntax for object literals

var object1 = { id: 101, name: 'Jhon Doe' }

var object2 = { age: 25, country: 'USA' }

const employee = { ...object1, ...object2 }

console.log(employee); //{ "id": 101, "name": "Jhon Doe", "age": 25, "country": "USA" }

// // 2. Object and Spread operator
const obj1 = { a: 10, b: 20 }
const obj2 = { c: 30 }

// 2.1 clone obj1 : Duplicating Iterable Objects (Cloning)
const clone_obj = { ...obj1 }
console.log(clone_obj) // {a:10, b:20}

// 2.1 combine obj1 and obj2 : Merging Iterable Objects
const obj3 = { ...obj1, ...obj2 }
console.log(obj3) // {a:10, b:20, c:30}

// 2.3 What happens when there are duplicate keys? 
// Merging Iterable Objects with duplicated keys

const foo = {
    english: 'hello', // is duplicated attribute
    french: 'bonjour',
    japanese: 'konnichiwa'
};
const bar = {
    english: 'howdy', // is duplicated attribute
    german: 'gutentag'
};
const baz = {
    ...foo,
    ...bar,
    esperanto: 'saluton',
    korean: 'annyeong'
};

console.log(baz);
// { english: 'howdy', french: 'bonjour', japanese: 'konnichiwa', german: 'gutentag', esperanto: 'saluton', korean: 'annyeong' }
// NOTE : The duplicate keys are overwritten in the order they’re applied. It’s important to take into consideration whether or not valuable data will be lost in the process of using the spread operator to merge iterable objects.

// 2.4 Updating object (add new properties) 

let user = {
    name: 'admed'
}

let updatedUser = {
    ...user,
    email: 'ahmed@gmail.com'
}

console.log(updatedUser);

// 2.4 Updating object (update existing properties) 

const propertieName = 'name'
let userUpdated = {
    ...user,
    [propertieName]: 'ahmed ben saleh'
}

console.log(userUpdated);

// 2.5 Delete properties from Object using Rest operator ?

const { email, ...rest } = updatedUser
console.log(email);
console.log(rest); // object with deleting a property from the source object.
console.log(updatedUser);

// Other example 
const transformedResponse = [{
    drugName: 'HYDROCODONE-HOMATROPINE MBR',
    drugStrength: '5MG-1.5MG',
    drugForm: 'TABLET',
    brand: false
},
{
    drugName: 'HYDROCODONE ABC',
    drugStrength: '10MG',
    drugForm: 'SYRUP',
    brand: true
}]

const output = transformedResponse.map(({ drugName, ...rest }) => rest)

console.log(output)
// [
//     { drugStrength: '5MG-1.5MG', drugForm: 'TABLET', brand: false },
//     { drugStrength: '10MG', drugForm: 'SYRUP', brand: true }
// ]