// A tuple works like an array with some additional considerations:
// 1. The number of elements in the tuple is fixed.
// 2. The types of elements are known, and need not be the same.
// Link: https://www.typescripttutorial.net/typescript-tutorial/typescript-tuple/

// Skills
let skill: [string, number];
skill = ['Programming', 5];

// RGB colors
let color: [number, number, number] = [255, 0, 0];

// product item in cart
let productItem : [string, number]= ['tomate', 2];


// Optional Tuple Elements : RGBA colors
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
