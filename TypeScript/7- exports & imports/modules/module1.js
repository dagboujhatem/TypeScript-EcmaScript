"use strict";
exports.__esModule = true;
exports.sayBye = exports.sayHello = exports.sayHi = exports.User = exports.MODULES_BECAME_STANDARD_YEAR = exports.months = void 0;
// exporter un variable: tableau dans ce cas
exports.months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// exporter une constante
exports.MODULES_BECAME_STANDARD_YEAR = 2015;
// exporter une classe
// NOTE 1: Pas de point-virgule après la classe/fonction d’exportation
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
exports.User = User;
// exporter une fonction 
// NOTE 2: Pas de point-virgule après la classe/fonction d’exportation
function sayHi(userName) {
    console.log('Hi ' + userName);
}
exports.sayHi = sayHi;
// NOTE 3: nous pouvons mettre l’export séparément.
// 📁 say.js
function sayHello(user) {
    console.log("Hello, ".concat(user, "!"));
}
exports.sayHello = sayHello;
function sayBye(user) {
    console.log("Bye, ".concat(user, "!"));
}
exports.sayBye = sayBye;
