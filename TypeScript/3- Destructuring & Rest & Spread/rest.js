var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// REST with function
var restOperatorWithFunction = function (n) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(args); // Output: [ 2, 3, 4, 5 ] 
};
restOperatorWithFunction(1, 2, 3, 4, 5);
// REST with objects
var restWithObjects = function () {
    var student = {
        age: 10,
        height: 5,
        weight: 50
    };
    var age = student.age, other = __rest(student, ["age"]);
    console.log(age); // Output: 10
    console.log(other); // Output: {height: 5, weight: 50}
};
restWithObjects();
