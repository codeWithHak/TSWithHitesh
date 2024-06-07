class Teacher {
    name:string
    experience:number
    constructor(name:string,experience:number){
        this.name = name
        this.experience = experience
    }
}
class Student {
    

    constructor(public name:string,
                private experience:number,
                private age:number){}
}


class User {

    readonly country:string = "khi"
    private tokens:number = 1
    constructor (public name:string,
                public age:number,
                public email:string){}

        get userName(){
            return `Name is ${this.name}`
        }

        get tokenCount (){
            return `Total tokens: ${this.tokens}`
        }

        set checkToken (newToken:number){
            if (newToken <= 1) {
                throw new Error ("Token limit exceeded")
            }
            this.tokens = newToken
        }

}

let huz = new User ("huzair",17,"huz@h.com")


class Data {
    constructor(public country:string, public city:string){

    }

    get address (){
        return `City: ${this.city} Country: ${this.country}`
    }

    set address (val) {
        const value = val.split(' ');
        this.country = value[0];
        this.city = value[1]
    }
}

let destination = new Data ("Pakistan", "Karachi") 
destination.address = "Kuwait Oman"
console.log(destination.address);
