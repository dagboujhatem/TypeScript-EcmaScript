// This functionality helps us to check that the object has the given private slot in it, for this purpose, the "in" operator is used.

// class Person {
//     #name;
//     constructor(name) {
//         this.#name = name;
//     }
//     static check(obj) {
//         return #name in obj;
//     }
// }

// console.log(Person.check(new Person())); // true


// Example 2
class User {
    #name;
    constructor(name) {
        this.#name = name;
    }
    static check(obj) {
        return #name in obj;
    }
}

class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }
    static check(obj) {
        return #name in obj;
    }
}

console.log(
    User.check(new User()),     // true
    User.check(new Person()),   // false
    Person.check(new Person()), // true
    Person.check(new User()));   // false