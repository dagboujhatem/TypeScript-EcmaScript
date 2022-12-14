// Les paramètres ordonnées nuisent à la lisibilité du code et au refactoring.
// Malheureusement, les named parameters n'existent pas mais une solution de contournement native est possible grâce au destructuring.
// Link of demo: https://guide-angular.wishtack.io/ecmascript-6+/named-parameters

// interface ICostomer {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phoneNumber: string;
// }

class Customer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    // Named Parameters avec un seul paramètre (args).
    constructor(args: any = {}) {
        // Destructuring of args
        const {firstName, lastName, email, phoneNumber = null} = args;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}