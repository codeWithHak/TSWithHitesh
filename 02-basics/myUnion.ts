type user = {
    name:string,
    id:number
}

type admin = {
    username:string,
    id:number,
    isLoggedIn:boolean
}

let newuser:user | admin = {name:"hak",id:18}
newuser = {name:"uak", id:34, isLoggedIn:true}
//console.log(newuser);

function dbData (id:number | string) {
    if (typeof id === "string") {
        return id.toUpperCase()
    }

    else{
        return id + 2
    }
}

//console.log(dbData("hello"));

let myArr:number[] = [1,2,3,4,5,6]

let myStr:string[] = ["H","A","K"]

let myMix:(string|number)[] = ["H",1,"A",2,"K",3]

console.log(myMix);



