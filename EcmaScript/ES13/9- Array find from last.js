// use findLast() &  findLastIndex() methods in the array Object

const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

// find
array.findLast((n) => n.value % 2 === 1); // { value: 3 }

// findIndex
array.findLastIndex((n) => n.value % 2 === 1); // 2
array.findLastIndex((n) => n.value === 9); // -1