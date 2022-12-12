// With asynchronous iterables, we can use the await keyword in for/of loops.

// basic exemple without loop
console.log("==================== exemple 1 =================")

async function* load() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

//  let l = load();
//  l.next().then(r=>console.log(r))
//  l.next().then(r=>console.log(r))
//  l.next().then(r=>console.log(r))
//  l.next().then(r=>console.log(r))


// The output of the above code will be as shown below −
//  {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: undefined, done: true}

// exemple with for/of loop & await is used in this loop
console.log("==================== exemple 2 =================")

async function* load() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

async function test() {
    for await (const val of load()) {
        console.log(val)
    }
}
// test();
// console. log('end of script')

// The output of the above code will be as shown below −
// end of script
// 1
// 2
// 3

// exemple with for/of loop & await is used in this loop
console.log("==================== exemple 3 =================")

async function fntest() {
    for await (const val of [10, 20, 30, 40]) {
        console.log(val)
    }
}
fntest();
console.log('end of script');

// The output of the above code will be as shown below −
// end of script
// 10
// 20
// 30
// 40