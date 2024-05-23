interface User {
    readonly idol:string
    name:string
    age:number
    email:string
    religion?:string
    startTrial():string
    getCoupon(couponNmae:string):number

}

interface User {
    role:string
}

interface Personal extends User{
    code:number
}

let user:Personal = {
    name:"huzair",
    age:18,
    email:"hak@gmail.com",
    religion:"Islam",
    idol:"Babar",
    role:"ceo",
    code:18,
    startTrial: () => {
        return "Trial is started"
    },
    getCoupon:(name:"huzair") => {
        return 20
    }
}
console.log(user);

export{}