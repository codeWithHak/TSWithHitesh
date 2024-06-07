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


function getFirstElement <T>(val:T[]):T{
    return val[0]
}

const valueNum = getFirstElement([12,14,15])
// console.log(valueNum);
const valueStr = getFirstElement(["Hello", "hi"])
// console.log(valueStr);


// Api response use case

type ApiResponse <Data> ={
    data:Data,
    isError:boolean,
    email:string
}

type userResponse = ApiResponse <{name:string,age:number}>
type adminResponse = ApiResponse <{issue:string}>

const response:userResponse={
    data:{
        name:"huz",
        age:18
    },
    isError:false,
    email:"h@h.com"
}
const responseAdmin:adminResponse={
    data:{
        issue:"not dound"
    },
    isError:false,
    email:"admin@me.com"
}   



const stroingData =<T> (size:T):string=>{
    const print = `${size} bytes of data` 
        return print
    
}

// console.log(stroingData(1))

const userData = <T,>(obj:T,callback:(obj:T)=>T):T=>{
    return callback(obj)
}

const callback = <T>(obj:T):T=>{
    return obj
}

// console.log(userData({name:"huz",age:18},callback))


// again generics 

function getData <D> (name:D):D {
    return name
}

// console.log("Name is", getData("Huzair"));

//Generic Classes

interface userData{
    name:string,
    email:string,
    password:string
}

function getUser< T,U extends userData> (valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

getUser(1,{
    name:"",
    email:"",
    password:""
})


interface IQuiz {
    subject:string,
    marks:number
}

interface ICourse {
    name:string,
    instructor:string,
    duration:string
}

class Sellable <T>{
    public cart:T[]= []

    addToCart(product:T){
        this.cart.push(product)
    }


}