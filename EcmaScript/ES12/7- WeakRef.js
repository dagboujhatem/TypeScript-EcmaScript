//
// We can use the deref() method to access the weak reference if it is still available in memory.

const student = {
    name: 'John Doe',
    age: 20,
    address: {
      number: 365,
      street: 'Flower street'
    }
  }
const ref = new WeakRef(student);
const myAge = ref.deref().age;
console.log(myAge); //output: 20
