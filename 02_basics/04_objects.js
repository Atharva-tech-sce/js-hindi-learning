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









































































































































































































































