// Numeric separators are used for larger numbers that are hard to read by separating them with (_) between a group of digits. Let see this by an example

// Before ES12 
const amountTTC = 1000000000;
console.log(amountTTC);
console.log(typeof amountTTC);

// After ES12
const amountHTC = 1_000_000_000;
console.log(amountHTC);
console.log(typeof amountHTC);


