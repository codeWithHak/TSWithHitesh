// function sum2 (num:number){

//     return num + 1
// }

//  console.log(sum2(3))

// function convertToCapital (val:string){
//     return val.toUpperCase()
// }

// console.log(convertToCapital("huz"));

// let userInfo = (name:string,age:number,email:string) =>{
// return `Name of user is ${name} he is ${age} years old and his email is ${email}`
// }
// console.log(userInfo("Huzair",18,"huzairahmedkhan@gmail.com"));

// export{}

// const heros = ["Thor", "Cap", "Supraman"]

// heros.map(hero => {
//     `Hero is ${hero}`
// })


function myFunc (num:number):number{
    return num * 2
}

// console.log(myFunc(2));

// function myVal (val:number):boolean | string{
// if (val > 5) {
//     return true    
// }
// else{
//     return "200 ko"
// }

// }

// console.log(myVal(1));

// let heroes = ["thor","spiderman","superman"]
// let oneHero = heroes.map((hero) =>`hero name: ${hero}`)
// console.log(oneHero);

function consoleError (err:string):void{
    console.log(err);
    
}

function handleError (err:string):never{
   throw new Error(err);  
}

console.log(handleError("error 404"));






