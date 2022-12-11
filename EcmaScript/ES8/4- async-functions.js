// add async/await to simplify the usage of Promises

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });

    // wait for result 
    result = await myPromise;
    console.log(result)
}
  
 myDisplay();