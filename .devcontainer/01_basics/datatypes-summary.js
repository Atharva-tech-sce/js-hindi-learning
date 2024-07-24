//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt (BigInt => scientific value or big value)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // if we will do 'typeof' null we'll get 'object'
let userEmail; // this will lead to userEmail being undefiend or you can just type userEmail = undefiend

const id = Symbol('123') // to make id unique we use 'Symbol'
const anotherId = Symbol('123') /* Even though the value in id and anotherId 
seems same they are not cause symbol make every variable unique and that's why they are not
same, yoyu can check by running console.log given below  */

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh", //everything in curly braces are object
    age: 22, // object can store any datatypes even object can store object in itself
}


const myFunction = function(){
    console.log("Hello world"); // function is defined as function(){}
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3