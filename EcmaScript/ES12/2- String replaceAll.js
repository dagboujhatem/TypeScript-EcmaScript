// I find this method as my favorit one to use further in my codebase when working with strings and substrings replacements as there is no need on using regular expressions.
const myString = "This is interesting book that contains interesting exemples";
const regExpReplace = myString.replace(/interesting/g, 'JavaScript');

console.log(regExpReplace); 
// Output: This is JavaScript book that contains JavaScript examples
