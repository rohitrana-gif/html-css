// what is object : objects are the combination of the key and value pairs

// let obj1={
//     name:"Sumit",
//     age:28,
//     roll_no:420
// }
// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1.age);
// console.log(typeof(obj1));


let object={
    course:"b.tech",
    branch:{
        cse:"core computer fundamentals",
        mechanical:"core concept of the machines",
        civil:"core concept of the construction",
        content:{
            cse:{
                firstyear:"basic of engineering,coding",
                secondyear:"java",
                thirdyear:"web dev",
                fourthyear:"placement",
                placement:{
                    web_dev:"full stack",
                    ai:"propagation",
                    mobile_dev:"react_native"
                }
            },
            mechanical:{
                firstyear:"basic of engineering of machine",
                secondyear:"fluid mechanism",
                thirdyear:"machines mechanism",
                fourthyear:"engine principles"
            },
            civil:{
                firstyear:"basic of civil engineering",
                secondyear:"soil",
                thirdyear:"survey",
                sum:function sum(){
                    console.log(3+6);
                    
                }
            }

        }
    }  
}
// console.log(object.branch.content.cse.thirdyear);
// console.log(object.branch.content.civil.sum());
// console.log(typeof(object));
console.log(object.branch.content.cse.placement.web_dev);









