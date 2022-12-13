// The "protected" modifier allows access within the same class and subclasses.

class Person {

    protected ssn: string;

    // other code ...

    // access within the same class
    public printSSN(): void {
        console.log(`Your SSN is: ${this.ssn}`)
    }
}

class Admin extends Person {

    // other code ...

    // access within the subclasses
    public showSSN(): void {
        console.log(`Your SSN is: ${this.ssn}`)
    }
}