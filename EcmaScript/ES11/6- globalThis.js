// Il arrive parfois que nous ayons besoin d’accéder au contexte global. Ce contexte global est différent suivant l’environnement d’exécution :
// window : Dans le cas du navigateur web;
// self : Dans le cas de l’utilisation d’un web worker;
// global : Dans le cas de l’environnement NodeJS.

// Exemple via une cas d'utilisation :
// Prenons comme exemple la vérification de la prise en charge du type BigInt par l’environnement d’exécution et l’utilisation d’un polyfill dans le cas où celui-ci n’est pas présent :

//  Avant ES 11 (avant 2021)
let globalContext = null;

if (typeof self !== 'undefined') {
    globalContext = self;
}
if (typeof window !== 'undefined') {
    globalContext = window;
}
if (typeof global !== 'undefined') {
    globalContext = global;
}

if (!globalContext) {
    throw new Error('Unable to locate the global context');
}

if (!globalContext.BigInt) {
    // Create your BigInt polyfill
    console.log('You can create your BigInt polyfill');
}else {
  console.log("You can't create your BigInt polyfill: NOT SUPPORTED");
}



//  Avec ES-11 (après 2021)
if (!globalThis.BigInt) {
    // Create your BigInt polyfill
    console.log('You can create your BigInt polyfill');
}else {
  console.log("You can't create your BigInt polyfill: NOT SUPPORTED");
}
