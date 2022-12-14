// A type assertion is also known as type narrowing. It allows you to narrow a type from a union type.


// Example 
function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

// part 1
let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice); // Output: $95

let netPrice2 = getNetPrice(100, 0.05, false) as number;
console.log(netPrice2); // Output: 95