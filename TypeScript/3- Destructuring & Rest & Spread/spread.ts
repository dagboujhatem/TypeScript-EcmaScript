// working with arrays

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4] // like .push()
const newNumbers1 = [0, ...numbers] // like .unshift()
const newNumbers2 = [...numbers] // Copying an array (Clone)
// Concatenating arrays
const arr1 = ['A', 'B', 'C'];
const arr2 = ['X', 'Y', 'Z'];
const result = [...arr1, ...arr2];

// working with object
const spreadWithObjects = (): void => {
    // merge objects
    const object1 = { id: 101, name: 'Jhon Doe' }
    const object2 = { age: 25, country: 'USA' }
    const employee = { ...object1, ...object2 }
    // clone an obkject
    const newEmployee = {...employee}
    console.log(newEmployee)
    // update filed of an object
    const updatedEmployee = {...employee, country: 'FR'}
    console.log(updatedEmployee)
}
