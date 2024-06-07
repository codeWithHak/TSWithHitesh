"use strict";
// let names1:string[]=[]
// let names :Array<string> = []
// names = ["Huziar","Ahmed", "Khan"]
// names1 = ["The","Always","Rude","Abudllah"]
// // console.log(names);
// // console.log(names1);
// function identityOne(val:number):number{
//     return val
// }
// function identityTwo(val:string):string{
//     return val
// }
// function identityThree<Type>(val:Type):Type{
//     return val
// }
// // console.log(identityOne(18));
// // console.log(identityTwo("Second"));
// // console.log(identityThree("Third used <Type>"));
// type basicInfo = {
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }
// function createUser <T extends basicInfo> (info:T):T{
//     return info
// }
// const user1 = createUser({
//         name:"huzair",
//         age:18,
//         email:"hah.com",
//         password:'ssss'
// })
// // function person1 <basicInfo> ():basicInfo{
// //     return {
// //         name:"huzair",
// //         age:18,
// //         email:"hah.com",
// //         password:'oneTwoBuckleMyShoe'
// //     }
// // }
// // const printIdentity =  identityThree<basicInfo>({
// //     name:"huzair",
// //     age:18,
// //     email:"hah.com",
// //     password:'oneTwoBuckleMyShoe'
// // })
// // console.log(printIdentity);
// console.log(user1);
// type Attendance = {
//     name:string,
//     signature:string
// }
// function setAttendance<A extends Attendance >(val:A) : A{
//     return val
// }
// const user2 = setAttendance({
//     name:"user1",
//     signature:"unseen"
// })
// console.log(user2);
// function getUserData <T>(val:T[]):T{ 
//         const userNum = 4
//         return val[userNum]
// }
// console.log(getUserData([1,2,3,4,5]))
// const logUserData  = <T>(val:T[]):T=>{
//     const myReturn = 0;
//     console.log(val[myReturn]);
//     return val[myReturn]
// }
// logUserData(["hello","hi"])
// const printAge = <A>(age:A):A=>{
//     console.log(age);
//     return age
// }
// printAge(18)
function getFirstElement(val) {
    return val[0];
}
const valueNum = getFirstElement([12, 14, 15]);
console.log(valueNum);
const valueStr = getFirstElement(["Hello", "hi"]);
console.log(valueStr);
