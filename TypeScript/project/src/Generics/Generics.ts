// Le problème: imaginons que nous avons besoin de faire une fonction qui retourne le premier element d'un tableau  passé en argument.
// L'entête de fonction est ==> function first(items: string[]): string { ...}
// C'est cool, mais imaginons maintenant que nous avons faire la même fonction mais cette fois en passant un tableau de numbre ==> function first(items: number[]): number { ...}
// Le problème ici que nous avons fait la même logique sauf que nous avons passé deux paramétres ayant deux types différent.
// ==> Notre but ici, c'est d'utiliser la même fonction pour faire les deux logiques (DRY: Don't Repeat Yourself)

// Solution 1: using any 
// function first(args: any[]):any{
//     return args[0]
// } 

// This solution works fine. However, it has a drawback.
// It doesn’t allow you to enforce the type of the returned element. In other words, it isn’t type-safe.
// A better solution to avoid code duplication while preserving the type is to use generics.

// Solution 2: using generic function 
function first<T>(args: T[]): T {  // T ==> Type
    return args[0]
}

const firstString = first(['1', '2', '3']) // string
const firstNumber = first([1, 2, 3]) // number

let numbers = [1, 5, 7, 4, 2, 9];
let returnElem: string;
// returnElem = first(numbers);  // compiler error: Type 'number' is not assignable to type 'string'.

// Dans DOM on utilise des fonctions générique aussi
const el = document.querySelector<HTMLButtonElement>('button');

// Dans les tableaux
const array: Array<string | number> = ['1', '2', 3, 4]