const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// OR, both are same
let useEmail = undefined

const anotherId = Symbol('123')
const id = Symbol('123')

console.log(id === anotherId);
console.log(typeof score);

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh", //everything in curly braces are object
    age: 22, // object can store any datatypes even object can store object in itself
}

console.log(myObj)

const myFunction = function(){
    console.log("Hello world"); // function is defined as function(){}
};

myFunction() 
/* when you call 'myFunction()' it will call function() an that will call Hello world, 
But wehn you type in "console.log(myfunction())" this will result in console log => myFunction => function
=> hello world after that in myFunction() it will not be defiend as anything so will give "undefiend" */
               
