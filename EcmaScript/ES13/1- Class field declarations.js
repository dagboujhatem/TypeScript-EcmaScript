// Before ES13 we would define properties of a class in its constructor like this:

class User {
  constructor() {
    // public field
    this.name = "Tom";
    // private field
    this._lastName = "Brown";
  }

  getFullName() {
    return `${this.name} ${this._lastName}`;
  }
}

const user = new User();
console.log(user.name); // "Tom"

console.log(user._lastName); // "Brown"
// no error thrown, we can access it from outside the class


/**
 *   Now with ES13
 *   
 */

class User2 {
  constructor() {
    // public field
    this.name = "Tom";
    // private field
    this._lastName = "Brown";
  }

  getFullName() {
    return `${this.name} ${this._lastName}`;
  }
}

const user2 = new User2();
console.log(user2.name); // "Tom"

console.log(user2.getFullName()); // "Tom Brown"

//console.log(user2.#lastName); // SyntaxError - cannot be accessed or modified from outside the class

