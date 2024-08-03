
// let rollno = 33 //this is number
// let rollno = "33" // this is string
// let rollno = "33abc" // this is NaN
// let rollno = null // this will give "0" as output
// let rollno = undefined // this will give undefined as output
// let rollno = true // it is a boolean function and will give 1 or true as otput
// let rollno = false// it is a boolean function and will give 0 or False as otput
// let rollno = "Atharva"

console.log(typeof (rollno) );
console.log(typeof rollno); // both console.log(typeof (rollno) ); and console.log(typeof rollno); are same they give gsame output

let valueInNumber = Number(rollno)
 
console.log(typeof valueInNumber);

console.log(valueInNumber)//In terminal output NaN means "not a number"

/*If you used null in dobule quote like "null" than let rollno = "null" it will give output Nan because dobule quotes
will convert it into strings, strings is function that can contain multiple data types */ 



// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
// let isLoggedIn = "Atharva"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false; "Atharva" => true

let somenumber = 33

let stringnumber = String(somenumber)
console.log(stringnumber)
console.log(typeof stringnumber)




// ******************************** OPERATIONS ***********************************

let Score = 70
let negScore = -Score
console.log(negScore);

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2**3); 
console.log(2%3);


let str1 = "hello"
let str2 = "Atharva"
let str3 = str1 + str2

console.log(str3);

// Javascript evaluate equation from left to right 

console.log("1" + 2 ); // here on left side 1 is written in string so it will treat the whole equation as string and will not perform arithmetic operations
console.log( 1 + "2" ); // here on right side 2 is written in string so it will treat the 1 as number but 2 as string and will not perform arithmetic operations
console.log( "1" + 2 + 2 ); // here on left side 1 is written in string so it will treat the whole equation as string and will not perform arithmetic operations
console.log( 1 + 2 + "2" ); //here on left side both are numbers and the javascript will add both of them but will treat 2 as string and won't perform arithmetic opertions with it

// the java script won't add any number with string because string can contain any type of data type
// example : 

console.log( "Atharva" + 2 );// here you can see why javascript did't perform arithmetic
// //or
console.log(2 + "atharva"); // here you can see why in second case from above examples, even though left side was numeric javascript did't perform aritmetic operations

let gameCounter = 100 

++gameCounter; // this is pre increment operator

gameCounter++; //this is post increament operator

// console.log(gameCounter);

let a = 5;
let b = 5;

console.log(++a); // Prefix Increment: a is incremented to 6, then 6 is returned and printed
console.log(a);   // a is now 6

console.log(b++); // Postfix Increment: b is returned as 5, then b is incremented to 6
console.log(b);   // b is now 6

/* Prefix Increment (++variable): Increases the variable's value by one, then returns the new value. 
so if a = 5 and we use prefix it will first do increment the orignal value and than will increment output */


/* Postfix Increment (variable++): Returns the current value of the variable, 
then increases the variable's value by one. so, if b = 5 and we use postfix it will print orignal output first 
than it will incremant operator and give output */









