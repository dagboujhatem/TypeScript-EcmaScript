//  TypeScript readonly access modifier to mark class properties as immutable property.
class Person1 {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person1 = new Person1(new Date(1990, 12, 25));
// person1.birthDate = new Date(1991, 12, 25); // Compile error