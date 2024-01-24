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
// const maxOfTwo =(x,y) => x>y?x:y;
//
//
// console.log(maxOfTwo(113,551))

//Arrays

// const arr=[1,2,3,4]
// console.log(typeof arr)

// const arr=[1,2,3,4,5,6]
// console.log(arr.includes('2'))
//

// zaid={
//     name:"zaid",
//     age:21,
//     skills:['Java','C++','C','Python'],
//     aim:"Web Developer"
// };
//
// console.log(zaid.skills[1])

// zaid={
//     name:"zaid",
//     age:21,
//     skills:['Java','C++','C','Python'],
//     aim:"Web Developer"
// };
// console.log(`${zaid.name} knows ${zaid.skills.length} languages but his favourite language is ${zaid.skills[1]}!`)
//if the value is not present then it shows undefined
// console.log(zaid["efg"])

// const quest=prompt("Enter thing that you want to know about zaid that includes name, age. skills and aim");
// if (zaid[quest])
//     console.log(zaid[quest]);
// else
//     console.log("Wrong choice");

// zaid={
//     name:"Zaid",
//     dob:2002,
//     currentYear:2024,
//     currentAge:function (){
//         let value=this.currentYear-this.dob;
//         return value;
//     }
// }
// console.log(zaid.currentAge())
// let s1 = "";
// if (s1 == 0) console.log("Undefined");
// else console.log("Not undefined");
