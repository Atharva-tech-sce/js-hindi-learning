//++++++++++++++++++++++++++++++++++++++++++++  NUMBER  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

const score = 400
// console.log(score);

const balance = new Number(100)//specially defiend as number
// console.log(balance);

// console.log(balance.toString().length);//it is one of the propeties of string

const balance1 = new Number(100)
/*console.log(balance1.toFixed(4)); /*to print decimal after number like "100.00,100.20" etc, 
so we can print as much number as we just have to add quantity in toFixed() that how much decimal we need to print*/

const myNumber = 23.78980
const otherNumber = 23.89
const mylog = 123.894

//to precision is genrally used to give precies info of numbers after decimal

// console.log(myNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(3));
// console.log(mylog.toPrecision(3));

const Hundreds  = 1000000
// console.log(Hundreds.toLocaleString());
//it is used to define number in thousand, hundered thousand like that, above one is in US standards

// console.log(Hundreds.toLocaleString('en-In'));
//here we converted us standard to Indian standard simply by giving 'en-In'


//++++++++++++++++++++++++++++++++++++++++   MATHS   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(2));//it will give absolute value
// console.log(Math.abs(-2));//this will also give "2" output as it's absolute value

// console.log(Math.round(4.6));//it gives round off of the value
// console.log(Math.ceil(4.2));//ceil => ceiling gives output as round off but as big value like 4.2 will get round off of 4.2 will be 5
// console.log(Math.floor(4.9));//floor will give round of as its smaller value like 4.9 will be 4
// console.log(Math.min(4, 3, 6, 8));//it give minimum of output of all the arry
// console.log(Math.max(4, 3, 6, 8));//it gives maximum of output of all thw arry

console.log(Math.random());//give random number
console.log(Math.random()*10);//give random number but like if you have to have to desing dice you have to keep it till 6 so e multiply it with 10, it will genrate random number till 10
console.log(Math.random()*10+1);//we did "+1" so that the number will start form 1 only otherwise It may start as 0.21 like this
console.log((Math.random()*10)+1);/*to ensure code run smothly according to BODMAS we gave "*10" a
priority and ensured that it will get excute first, then it will execute +1*/
console.log(Math.floor(Math.random()*10)+1);/*floor will give number ithout decimal, but in random it may be "0" so you add "+1"
so it starts from 1 If you are designing dice or any random number genorator you have to start it from "1" */

 const min = 10
 const max = 20

console.log( Math.floor( Math.random() * (max - min +1 ) )+ min );

/*

=> In this method first we do "max - min + 1" max = min to limit the range so the range will be in form 10 - 20 = 10, so now it will print
number from "0 to 10" and than we do +1 to ensure that it will never print 0

=> Math.random to genrate random number

=> +min to so that it will give minimum 10, so now it will start counting from 10

=> We don't have to have to set max limit cause we have alredy set it as "const = 20", 

So question arrised is so did we defined min value why do we have to write "+min" again?
Answer is when we did max-min it subtracted 20-10 which gave answer 10 which was just an operation we did'nt set any limits in it
so by doing +min at end we set limit.


=> math.floor to avoid the decimal number we want exact numbers


*/












































 