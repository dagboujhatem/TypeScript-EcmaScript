// In TypeScript, you can use the "as" keyword or "<>" operator for type castings.

/**
 * 
 *  Type casting using the as keyword
 * 
 */ 

// The problem: The reason is that the value property doesn’t exist in the Element type.
// let input = document.querySelector('input["type="text"]');
// console.log(input.value); // ERROR

// Solution 1 
let input1 = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(input1.value); // tha value of input

// Solution 2
let input2 = document.querySelector('input[type="text"]');
console.log((input2 as HTMLInputElement).value); // tha value of input

// Other example: 
let el: HTMLElement;
el = new HTMLInputElement();

let button : HTMLButtonElement = new HTMLButtonElement();
button.addEventListener('click', ( e: Event)=>{
    e.preventDefault();
})

/**
 * 
 *  Type Casting using the <> operator
 * 
 */ 

// Solution 1
 let input3 = <HTMLInputElement>document.querySelector('input[type="text"]');
 console.log(input3.value);

// Solution 2
let input4 = document.querySelector('input[type="text"]');
console.log((<HTMLInputElement> input4).value);
