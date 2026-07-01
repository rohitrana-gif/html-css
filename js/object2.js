// let obj1={name:"Rohit" , age:26, roll_no:34}

// console.log(obj1);

// let obj2=obj1
// console.log(obj2);
// console.log(obj2.name="sumit");
// console.log(obj2);
// obj1.name="Superman";
// console.log(obj1);
//  ********************object destructuring*********

// let obj1={name:"sumit" , age:29, roll_no:420, class:"ukg"}

// let {name , age}=obj1
// console.log(name);
// console.log(age);

// let obj2={animal:"dog", car:"mercedes" , hero:"thor" , fruit:"mango"}
// let { animal,fruit }=obj2
// console.log(fruit);

// ***************rest operator in object

// let { animal, ...baaki}= obj2
// console.log(animal);

// console.log(baaki)

// *****************spread operator in object

// let obj={animal:"dog", car:"mercedes" , hero:"thor" , fruit:"mango"}

// let obj1={...obj}
// console.log(obj1);

let obj1={name:"tinku" , age:25}
let obj2={roll_no:420 , class:"lkg"}
let obj3={...obj1 , ...obj2};
console.log(obj3);




















