// working with arrays
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [1, 2, 3];
var newNumbers = __spreadArray(__spreadArray([], numbers, true), [4], false); // like .push()
var newNumbers1 = __spreadArray([0], numbers, true); // like .unshift()
var newNumbers2 = __spreadArray([], numbers, true); // Copying an array (Clone)
// Concatenating arrays
var arr1 = ['A', 'B', 'C'];
var arr2 = ['X', 'Y', 'Z'];
var result = __spreadArray(__spreadArray([], arr1, true), arr2, true);
// working with object
var spreadWithObjects = function () {
    // merge objects
    var object1 = { id: 101, name: 'Jhon Doe' };
    var object2 = { age: 25, country: 'USA' };
    var employee = __assign(__assign({}, object1), object2);
    // clone an obkject
    var newEmployee = __assign({}, employee);
    console.log(newEmployee);
    // update filed of an object
    var updatedEmployee = __assign(__assign({}, employee), { country: 'FR' });
    console.log(updatedEmployee);
};
spreadWithObjects();
