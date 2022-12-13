const config = {
    port: 3000,
    projectName: "backend"
}

// export default of config constant
// export default config;

// 2nd waay to export it as default 
// export default {
//     port: 3000,
//     projectName: "backend"
// }

// 3th way to export as default
export {config as default};

// NOTES:
// NOTE 1: ONLY ONE export default in the same file (i.e Il ne peut y avoir qu’un seul export default par fichier).
// NOTE 2: Chaque fichier peut contenir des exports nommé ou par defauts (les deux types d'exports)
// NOTE 3: Techniquement, nous pouvons avoir à la fois des exportations par défaut et des exportations nommées dans un seul module, mais dans la pratique, les gens ne les mélangent généralement pas. Un module a soit, des exports nommés, soit celui par défaut.


// Example: nous pouvons avoir à la fois des exportations par défaut et des exportations nommées dans un seul module
// Dans un autre cas, supposons qu’un module user.js exporte un élément principal par “défaut” et quelques éléments nommés (rarement le cas, mais ça arrive):
// 📁 user.js
// export default class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// export function sayHi(user) {
//     alert(`Hello, ${user}!`);
// }

// To read more check this documentation: https://fr.javascript.info/import-export
