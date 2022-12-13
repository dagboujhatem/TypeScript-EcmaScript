// Unlike an instance property, a static property is shared among all instances of a class.
class Employee1 {
    // To declare a static property, you use the static keyword. 
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {
        // To access a static property, you use the "className.propertyName"
        Employee1.headcount ++;
    }

    // To declare a static method, you use the static keyword before the method name
    public static getHeadcount() {
        return Employee1.headcount;
    }
}

const john = new Employee('John', 'Doe', 'Front-end Developer');
const jane = new Employee('Jane', 'Doe', 'Back-end Developer');

// show static property
console.log(Employee1.headcount); // 2
// execute static method
console.log(Employee1.getHeadcount); // 2