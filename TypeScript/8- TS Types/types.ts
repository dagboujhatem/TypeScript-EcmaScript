// Le typage dans TypeScript est optionnel.
// Les types primitifs possibles dans TypeScript sont: number, boolean, string, Array, Date, etc ...
// Dans TypeScript, on a la possibilité de mettre plusieurs types séparés par un pipe ( | )
type PrimitiveArray = Array<string| number | boolean>;

var x : string | number; 
var y : PrimitiveArray; 
var z: any;

y = ['Bonjour', 42, true] // OK
z = 4 // OK
z = 'Bonjour' // OK
// x = true // Error: Type 'boolean' is not assignable to type 'string | number'.