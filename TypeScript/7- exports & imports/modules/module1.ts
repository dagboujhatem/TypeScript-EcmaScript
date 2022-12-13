// exporter un variable: tableau dans ce cas
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// exporter une constante
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// exporter une classe
// NOTE 1: Pas de point-virgule après la classe/fonction d’exportation
export class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// exporter une fonction 
// NOTE 2: Pas de point-virgule après la classe/fonction d’exportation
export function sayHi(userName) {
    console.log('Hi ' + userName);
}


// NOTE 3: nous pouvons mettre l’export séparément.
// 📁 say.js
function sayHello(user) {
    console.log(`Hello, ${user}!`);
}

function sayBye(user) {
    console.log(`Bye, ${user}!`);
}

export { sayHello, sayBye }; // une liste de variables exportées