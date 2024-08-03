 const accountId = 144553
 let accountEmail = "atharva@gmail.com"
 var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //If we don't state the value of any variable than It will be undefiend in java script//
/* const, let, var = assing to memory and their value 
example : 
memory hain accountID aur usme humne value assing kri hain vo hain 144553 */

//accountId = 2 // we cannot change const cause it is constant

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengluru"    /* In java script to declare constant we use "const"
and to declare variables there are 2 options 1.let 2.var THE SECOND OPTION IS DENGORUS USE ONLY WHEN
NEEDED IN EMERGENCY:( CAUSE IT DON'T SUPPORT THE LOOPS OR CONDITIONS LIKE "IF ELSE"*/
// Now seriously, prefer not to use var because of issue in block scope and functional scope//

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

