"use strict";
function first(args) {
    return args[0];
}
const firstString = first(['1', '2', '3']); // string
const firstNumber = first([1, 2, 3]); // number
