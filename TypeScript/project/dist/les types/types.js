"use strict";
const a = "Hello world";
const n = 3;
const b = true;
const d = null;
const un = undefined;
// les tableaux
const arr = ['aze', 'aze', 'aze'];
const arrStr = [...arr];
const arrAny = [...arr, true, false, 10];
// les objets 
const user = { firstname: 'Jhon', lastName: 'Doe' };
const loggedUser = { firstname: 'Jhon', lastName: 'Doe' }; // optional property
const account = {}; // pour les objets dynamique : lorsque vous avez pas mal de properité
// les dates 
const currentDate = new Date();
// les fonctions
const cb = (e) => {
    e.preventDefault();
};
function printId(id) { }
// les types de retour des fonction dans TS
function print() { } // void : foonction qui ne retourne rien
const callback = (e) => {
    e.preventDefault();
};
// les types sont aussi automatiquement typé dans TypeScript
const username = 'super-admin';
const userAccount = { firstname: 'Jhon', lastName: 'Doe' };
