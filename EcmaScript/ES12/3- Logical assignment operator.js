// With ES12 feature there are three such kind of logical assignment operator:
// 1. Logical nullish assignment (??=) -> (x ??= y) (only assigns if x is null or undefined)
// 2. Logical AND assignment (&&=) -> (x &&=y) (only assigns if x is truthy)
// 3. Logical OR assignment (||=) -> (x ||=y ) (only assigns if x is falsy)

// 1. Logical nullish assignment (??=)

// const person = { name: 'John' };
// person.name ??= 'User 1';
// console.log(person.name);
// // output: John
// person.age ??= 18;
// console.log(person.age);
// // output: 18

// 2. Logical AND assignmen (&&=)
// const product = { stocks: 10 };
// product.stocks &&= 20;
// console.log(product.stocks);
// // output: 20
// product.exp &&= '12/31/2021';
// console.log(product.exp);
// // output: undefined

// 3. Logical OR assignment (||=)

const product = {
    stocks: 0,
    exp: '12/31/2021'
  };
  product.stocks ||= 10;
  console.log(product.stocks);
  // output: 10
  product.exp ||= '01/31/2022';
  console.log(product.exp);
  // output: 12/31/2021


