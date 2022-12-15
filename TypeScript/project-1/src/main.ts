// After change "strict" to true in tsconfig.json ==> il existe deux solutions pour corriger notre code

// Solution 1: using optional chaining (Chaînage optionnel)
// Link : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
const compteur  = document.getElementById('compteur');
let i = 0;
const increment = (e: Event)=>{
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if(span){
        span.innerText = i.toString();
    }
}
compteur?.addEventListener('click', increment);

// Solution 2: using Type Narrowing
// const compteur  = document.getElementById('compteur') as HTMLButtonElement
// let i = 0;
// const increment = (e: MouseEvent)=>{
//     e.preventDefault();
//     i++;
//     const span = compteur.querySelector('span') as HTMLSpanElement
//     span.innerText = i.toString();
// }
// compteur.addEventListener('click', increment);