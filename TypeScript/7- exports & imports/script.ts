// In all modern JavaScript projects, you split your code across multiple JavaScript files - so-called modules.

// Exports: 2 way of export (default export & named export): 
// 1st way (named export) defined in module1.ts
// 2nd way (default export) defined in module2.ts


// Imports: 2 way of import
// 1st way: import of named export 
// 📁 main.js
import {sayHi, sayBye} from './modules/module1';
sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// 2nd way: import of default export
import config  from './modules/module2';
console.log(config.port)
