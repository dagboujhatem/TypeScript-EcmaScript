// Les paramètres ordonnées nuisent à la lisibilité du code et au refactoring.
// Malheureusement, les named parameters n'existent pas mais une solution de contournement native est possible grâce au destructuring.
// Link of demo: https://guide-angular.wishtack.io/ecmascript-6+/named-parameters
var Customer = /** @class */ (function () {
    function Customer(args) {
        var firstName = args.firstName, lastName = args.lastName, email = args.email, _a = args.phoneNumber, phoneNumber = _a === void 0 ? null : _a;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Customer;
}());
