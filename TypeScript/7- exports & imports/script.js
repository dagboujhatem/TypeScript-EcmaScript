"use strict";
// In all modern JavaScript projects, you split your code across multiple JavaScript files - so-called modules.
exports.__esModule = true;
// Exports: 2 way of export (default export & named export): 
// 1st way (named export) defined in module1.ts
// 2nd way (default export) defined in module2.ts
// Imports: 2 way of import
// 1st way: import of named export 
// 📁 main.js
var module1_1 = require("./modules/module1");
(0, module1_1.sayHi)('John'); // Hello, John!
(0, module1_1.sayBye)('John'); // Bye, John!
// 2nd way: import of default export
var module2_1 = require("./modules/module2");
console.log(module2_1["default"].port);
