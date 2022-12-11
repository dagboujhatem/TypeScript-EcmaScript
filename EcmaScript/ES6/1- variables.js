/**  Syntax, Variables & Comments 
 * 
 * */


// 1. use camelCase for variables names: Variables and Readability

var firstname = 'Ahmed'; // not readable 
var firstName = 'Ali'; // OK ==> using camelcase 



// 2. The let keyword allows you to declare a variable with block scope.

var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10


// 3. The const keyword allows you to declare a constant (a JavaScript variable with a constant value).
// Constants are similar to let variables, except that the value cannot be changed.

var x = 10;
// Here x is 10
{
    const x = 2;
    // Here x is 2
}
// Here x is 10

