// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log( 2== 1);
// console.log(2 != 1); // comparision will always give output in boolean

// console.log("2" > 1);
// console.log("02" > 1); // javascript converts string to number than perform comparision  

/* console.log("Athava" > 1); here javascript converted string and found out that it is NaN 
which is not a number  and NaN is always < than 1 cause it is not compareable */

// console.log(null < 0); // "<" converts null to zero and therfore "0" can never be less than "0" and hence a false statement
// console.log(null > 0); // ">" converts null to zero and therfore "0" can never be greater than "0" and hence a false statement
// console.log(null == 0); // "==" dosen't convert but is loosely defiend as "undefiend", and "0" != "undefiend" and hence print false
// console.log(null >= 0); // ">=" it converts null to 0 and cause 0 is not greater than but is equal to 0 hence it is true statement
// console.log(null <= 0); //  "<=" it converts null to 0 and cause 0 is not less than but is equal to 0 hence it is true statement

// we don't do comparision like above in real life cause we want our code to be clean

/* 
for example
 10>=10 this statement is true not cause 10 is greater than 10 but is equal to 10
*/

// "===" is strict check the data type of value

console.log("2" === 2); // strict check will only give the value in boolean here you hvae compare same datatype always


