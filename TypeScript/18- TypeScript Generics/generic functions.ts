// Generic functions with multiple types

function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(result);
// Output: { name: 'John', jobTitle: 'Frontend Developer' }

