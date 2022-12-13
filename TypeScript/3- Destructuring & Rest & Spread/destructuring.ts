// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// working with array
const destructuringWithArrays = () => {
    // Example 1: Use Destructuring Assignment to Assign Variables from Arrays
    // const [a, b] = [1, 2, 3, 4, 5, 6];
    // console.log({a, b}); // {a: 1, b: 2}

    // Example 2: We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
    // const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
    // console.log({a, b, c}); // {a: 1, b: 2, c: 5}

    // Example 3 (Permutation des valeur):  Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a. 
    // Solution 1:
    // let a = 8, b = 6;
    // [a, b] = [b, a];
    // // Solution 2:
    // // let a = 8, b = 6;
    // // const arr = [a, b];
    // // [b, a] = arr;
    // console.log({ a, b }); // {a: 6, b: 8}

    // Example 4: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
    // function removeFirstTwo(list) {
    //     // Only change code below this line
    //     const [,, ...shorterList] = list; // Change this line
    //     // Only change code above this line
    //     return shorterList;
    // }

    // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const sourceWithoutFirstTwo = removeFirstTwo(source);
    // console.log(sourceWithoutFirstTwo);

    // Example 5: Use Destructuring Assignment to Pass an Object as a Function's Parameters
    const profileUpdate = ({ name, age, nationality, location }) => { // use destructuring as function parameters
        console.log({ name, age, nationality, location })
    }
    const profile = { name: 'Hatem', age: 30, nationality: 'TN', location: 'FR' }
    profileUpdate(profile)

}
destructuringWithArrays();

// working with object
const destructuringWithObjects = () => {
    // Example 1: Use Destructuring Assignment to Extract Values from Objects
    const user = { name: 'John Doe', age: 34 };
    const { name, age } = user;
    console.log({ name, age });

    // Example 2: Use Destructuring Assignment to Assign Variables from Objects
    const { name: fullName } = user; // affecter la valeur de l'attribut "name" de l'objet user dans le variable "fullName"
    console.log({ fullName });

    // Example 3: Use Destructuring Assignment to Assign Variables from Nested Objects
    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };
    const { today: { low: lowToday } } = LOCAL_FORECAST;
    const { today: { high: highToday } } = LOCAL_FORECAST;
    console.log({ lowToday, highToday });
}
// destructuringWithObjects();