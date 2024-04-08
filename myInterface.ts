interface User {
    readonly idol:string
    name:string
    age:number
    email:string
    religion?:string
    startTrial():string
    getCoupon(couponNmae:string):number

}

let user:User = {
    name:"huzair",
    age:18,
    email:"hak@gmail.com",
    religion:"Islam",
    idol:"Babar",
    startTrial: () => {
        return "Trial is started"
    },
    getCoupon:(name:"huzair") => {
        return 20
    }
}
console.log(user);

export{}