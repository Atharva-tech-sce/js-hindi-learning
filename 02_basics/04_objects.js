//Singleton

const tinderuser = new Object();//this is singleton object
// OR
const tinderuser2 = {};//this is non - singleton object

// console.log(tinderuser);

tinderuser.id = "123abc"
tinderuser.name = "Sam"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
     email: "atharva@gmail.com",
            Full_Name: {
              User_fullname: {
               first_name: "Atharva",
               Last_name: "Gulve",
    
    }
  }
}

// console.log(regularUser.Full_Name.User_fullname.first_name);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};


// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2)//we assing {} so that all the merge will go inside this curly braces insted of obj1, It is not compulsary still
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const user = [
  {
    id: 1,
    email: "a@gmial.com", 
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  }
]

user[1].email//so this will give us 1st property and in that emai or ID

console.log(tinderuser);

console.log(Object.keys(tinderuser));//to determine what keys does that object posses
console.log(Object.values(tinderuser));//to determine what values does that object posses
console.log(Object.entries(tinderuser));//all keys and its value are printed in arrays form

console.log(tinderuser.hasOwnProperty('name'));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
                                
// **** Object de-structure and JSON API ****

const course = {
                
                  coursename: "Js in hindi",
                  price: "999",
                  courseInstructor: "Atharva",
}

const {courseInstructor: instructor} = course /*in this we define what we need to extract like I need 
to extract courseInstructor from coursethats why and values can be edited as we did it from courseinstructor to
just instrucor*/

// or

// course.courseInstructor // this is trraditional method and whould have to make multiple of this command and can't be edited

console.log(instructor);

// you can say that everything in {} you can say it is destructuring

// coursename will give error cause object is not defined, the JSON files contanin strings
/* {
  
  "name": "Atahrva",
  "coursename": "Js in Hindi",
  "price": "Free"

} */

// API can also be found in arrays

[
  {},
  {},
  {}
]











































































































































































































































