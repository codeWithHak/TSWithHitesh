// Normal array does not have any restrictions for the order of array
let normalArray:(string|number|boolean)[] = [true,1,"hello"]

// use tuple if you want your array in a structured manner i.e

let tupArr: [string,number,boolean];

// tupArr = [true,"hello",2] This throws an error because the structure of tupArr is different from the structure in which values are stored in this array

 tupArr = ["hello",     2,     true]  // This code is correct
  //       string,   number,  boolean

// but there's a catch since tuples are defined as arrays you can use methods like push() pop() unshift() shift() and other array methods to manipulate it and this creates a mess.

tupArr.push("again hello")

console.log(tupArr);

tupArr.unshift("let's start")

console.log(tupArr);