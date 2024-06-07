function provideId (id:string|null){

    if (!id) {
        return ("Please provide Id");
        
    }
    return id.toLowerCase()

}

console.log(provideId("DDDD"));


// Type narrowing and In Operator 

interface IUser{
    name:string,
    email:string
}

interface IAdmin {
    name:string,
    email:string,
    role:string
}

function checkAdmin (role:IUser|IAdmin){
    if ("role" in role) {
        return `Admin: ${role.name}`
    }
    return `Username: ${role.name}`
}

console.log(checkAdmin({name:"Huziar",email:"huz@h.com"}));
