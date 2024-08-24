// singleton = only one object in itself
// If it is made by litrel it will not be singletone, but if made by constructor it will be singletone
// object.create // this method use constructor and thus includes singleton method


// object litrels


const mySym = Symbol("key1");
// inteview question how to use symbol as key or how to declare symbol in object
/* answer to above question is but it in [] so like [mySym] otherwise it will
 treat mySym as string in objec and aslo you have to use[] in console log*/


const JS_user = {
    name: "Atharva",
    "full Name": "Atharva Gulve",//you can not acces this with like .full_Name, you will compulsarly acess it like ["Full_Name"]
    age: 20,
    [mySym]: "myKey1",//if we don't use square brackets js will treat it as string
    location: "Gandhinagar",
    Email: "atharva@gmail.com",
    IsLoggedIn: false,
    LastLoggedIndays: ["Monday", "Sunday"]

}

console.log(JS_user.Email);// you should access this way more prefered
// OR
console.log(JS_user["Email"]);//this way is not more preferd, above one is better
console.log(JS_user["full Name"]);//that will automaticaly convert the .full name in ["full Name"] cause "full Name" is in sting
console.log(JS_user[mySym]);

JS_user.Email = "atharvagulve@chatgpt.com" // to overwrite the mail in jsuser we can smply do it by using "=" sign
Object.freeze(JS_user);//this will not allow any changes further in object of Js_user like below 
JS_user.Email = "atharvagulve@windows.com"
console.log(JS_user);

JS_user.greetings = function(){
    console.log("hello JS user");
    console.log(`helloe JS user, ${this.name}`);
    
    
}
console.log(JS_user.greetings);//this will just give you refrence to function not actually waht's written in function
console.log(JS_user.greetings());//this will actually give what's in the function


/*

=> In this we have to get the "name" from object so we used string interpolation by apllying back ticks then '$' 
and curly braces and in that we used '.this' to get all the propeties of object and from that we can also use
name which is one of the propety of object Js_user

=> '.this' is used so function will know what type of properties are in object and can acces it 
    
*/












