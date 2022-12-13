// REST with function
const restOperatorWithFunction = (n : number, ...args: any) =>{
	console.log(args); // Output: [ 2, 3, 4, 5 ] 
}

restOperatorWithFunction(1, 2, 3, 4, 5)

// REST with objects
const restWithObjects = () =>{
    const student = {
        age:10,
        height:5,
        weight:50
     }
     const {age,...other} = student
     console.log(age) // Output: 10
     console.log(other) // Output: {height: 5, weight: 50}
}

restWithObjects()