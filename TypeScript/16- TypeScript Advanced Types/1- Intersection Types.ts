// Problem: How to create a new type that has all features of existing types.
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

// type typeAB = typeA & typeB;
type Employee = Identity & Contact; 

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

type Customer = BusinessPartner & Contact;
let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

// Notice both BusinessPartner and Identity have the property name with the same type. If they do not, then you will have an error.
type EmployeeAdminstrator = Identity & BusinessPartner & Contact;
let admin: EmployeeAdminstrator = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};
// Note that the union type uses the | operator that defines a variable which can hold a value of either typeA or typeB
// let varName = typeA | typeB; // union type

type User = Identity | Contact;

let u: User =  {
    id: 100,
    name: 'John Doe',
    email: 'ohn.doe@example.com',
    phone: '(408)-897-5684'
}