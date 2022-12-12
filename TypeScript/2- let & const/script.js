// Les règles à appliquer dans tous les scripts: 
// 1. Utilisez toujours les "const" pour les variables dans tous le script.
// 2. Utiliser le "let" si vous avez une affectation dans votre script.
// 3. Evitez d'utiliser "var" le maximum, utilisez-le si vous n'avez pas d'autres solution.
var NAME = "Hatem";
var LAST_NAME = "DAGHBOUJ";
var isShow = true;
if (isShow) {
    var FULL_NAME = "".concat(NAME, " ").concat(LAST_NAME);
    console.log(FULL_NAME); // Output: "Hatem DAGHBOUJ"
}
// console.log(FULL_NAME); // ERROR: Cannot find name 'FULL_NAME'.
// Using the let to update some variable
if (true) {
    var hasError = false;
    console.log(hasError); // Output: 
}
// console.log(hasError); // ERROR: Cannot find name 'hasError'.
