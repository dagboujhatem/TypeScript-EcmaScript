// If you have worked with Java or C#, you can find that the main use of the interface is to define a contract between unrelated classes.
// Check the following example in this link : https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/

interface Json {
    toJSON(): string;
}

class Person implements Json {
    private _firstName: string;
    private _lastName: string;
    constructor(fName: string, lName: string) {
        this._firstName = fName;
        this._lastName = lName;
    }
    // setters
    
    toJson(): string {
        return JSON.stringify(this);
    }
}

let person = new Person('John', 'Doe');
console.log(person.toJson());

// Output
// {"firstName":"John","lastName":"Doe"}