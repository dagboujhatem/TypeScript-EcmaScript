// TypeScript provides three access modifiers: public, private, protected
// The public modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.

// The "private" modifier allows access within the same class.
class DataPrivate {

    // private attribute
    private name: string;
    private age: number;

    // private method
    private getFullName(): string {
        return `Your fullname is : ${this.name}`
    }

    // private methods can be calleb by another public methods
    public fullName(): string {
        return this.getFullName();
    }

    // getter without setters
    // If get exists but no set, the property is automatically readonly
    get getAge(): number {
        return this.age;
    }
}

var c = new DataPrivate()
console.log(c.getAge)