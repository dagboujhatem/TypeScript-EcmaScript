// Link : https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-interfaces/

// Example: 
interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(month);