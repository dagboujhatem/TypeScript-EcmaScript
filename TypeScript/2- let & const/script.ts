// Les règles à appliquer dans tous les scripts: 
// 1. Utilisez toujours les "const" pour les variables dans tous le script.
// 2. Utiliser le "let" si vous avez une affectation dans votre script.
// 3. Evitez d'utiliser "var" le maximum, utilisez-le si vous n'avez pas d'autres solution.

const NAME = "Hatem";
const LAST_NAME = "DAGHBOUJ";
const isShow = true;

// Block scoping with const
if(isShow) {
    const FULL_NAME = `${NAME} ${LAST_NAME}`; 
    console.log(FULL_NAME); // Output: "Hatem DAGHBOUJ"
}
// console.log(FULL_NAME); // ERROR: Cannot find name 'FULL_NAME'.
console.log(isShow); // Output: true
//isShow = false; // ERROR: cannot assign to 'isShow' because it is a constant

// Using the let to update some variable
// Block scoping with let
if(true){
    let hasError = false;
    console.log(hasError); // Output: false
}

// console.log(hasError); // ERROR: Cannot find name 'hasError'.
