// From ES2019 you can omit the catch parameter if you don't need it:.
// Optional catch binding is supported in all browsers since January 2020:

// Exemple :
// Before 2019:
try {
    // code
} catch (err) {
    // code
}
// After 2019:
try {
    // code
} catch {  // HERE: (err) is optional
    // code
}