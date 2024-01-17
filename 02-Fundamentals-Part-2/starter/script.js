// different types of functions

//Simple function
// function maxOfTwo(x,y)
// {
//     return x>=y?x:y
// }

//Function passed in a variable without name of the function
// const maxOfTwo=function (x,y) {
//     return x > y ? x : y;
// }

// Function passed in a variable with name of the function
//Note that only the variable can call the function and is not available out of the function
// const maxOfTwo= function maxFunction(x,y)
// {
//     return x>y?x:y;
// }

// Arrow function
const maxOfTwo =(x,y) => x>y?x:y;


console.log(maxOfTwo(113,551))



//Arrays

// const arr=[1,2,3,4]
// console.log(typeof arr)