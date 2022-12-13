// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.


// Interface declaration
interface Person {
    firstName: string;
    middleName?: string; // Optional property
    lastName: string;
    readonly ssn: string; // readonly property : properties should be modifiable only when the object first created
}

// Use interface
function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

const john = {
    firstName: 'John',
    middleName: 'K.',
    lastName: 'Doe',
    ssn: '171-28-0926',
};

console.log(getFullName(john));