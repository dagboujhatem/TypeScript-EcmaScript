// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// working with array
var destructuringWithArrays = function () {
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
    var profileUpdate = function (_a) {
        var name = _a.name, age = _a.age, nationality = _a.nationality, location = _a.location;
        console.log({ name: name, age: age, nationality: nationality, location: location });
    };
    var profile = { name: 'Hatem', age: 30, nationality: 'TN', location: 'FR' };
    profileUpdate(profile);
};
destructuringWithArrays();
// working with object
var destructuringWithObjects = function () {
    // Example 1: Use Destructuring Assignment to Extract Values from Objects
    var user = { name: 'John Doe', age: 34 };
    var name = user.name, age = user.age;
    console.log({ name: name, age: age });
    // Example 2: Use Destructuring Assignment to Assign Variables from Objects
    var fullName = user.name; // affecter la valeur de l'attribut "name" de l'objet user dans le variable "fullName"
    console.log({ fullName: fullName });
    // Example 3: Use Destructuring Assignment to Assign Variables from Nested Objects
    var LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };
    var lowToday = LOCAL_FORECAST.today.low;
    var highToday = LOCAL_FORECAST.today.high;
    console.log({ lowToday: lowToday, highToday: highToday });
};
// destructuringWithObjects();
