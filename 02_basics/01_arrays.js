// array

/* 

=> JavaScript arrays are resizable and can contain a mix of different data types.

=> JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1,
and so on

=> Arrays are only declared in brackets, the things inside arrays are called elements

=> JavaScript arrays are resizable and can contain a mix of different data types

=> JavaScript array-copy operations create shallow copies. 
there are two types in this as well
1. Shallow Copy = it creates  A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object from which the copy was made, therefore
you can also compare them to as heap memmory

2.A deep copy of an object is a copy whose properties do not share the same references (point to the same 
underlying values) as those of the source object from which the copy was made. you can also compare them to
stack memmoy

*/

const myArr = [ 0, 1, 2, 3, 4, 5, "Atharva", true];
// console.log(myArr[1]);

const Heros = ["Homlander", "Blozchkowiz", "Capitan Price"];
// console.log(Heros[1]);

const myArr2 = new Array (1, 2, 3, 4);
// console.log(myArr2[3]);
//If we define array like new Array we don't have to use squre brackets we can simply put array elements in parentheses



// Array methods

const myArr3 = [1, 2, 3, 4, 5]

myArr3.push(6);//it add an element in array 
myArr3.push(7);
myArr3.pop();//will remove any last element in arrays

// myArr3.unshift(8);//adds whatever number you give to array as elements at start
// myArr3.shift();//just remove any elements that we added throught unshift

console.log(myArr3);
console.log(myArr3.includes(8));//state wheter the element is in array or not, but in boolean form
console.log(myArr.indexOf(4));// gves index value of elemnts in array

let newArr = myArr3.join();//joint array and convert it to string
console.log(newArr);

//slice, splice and it's interview question

//slice

console.log("A", myArr3);

const myn1 = myArr3.slice(1, 3)/* will include 1 and 2 index but not 3rd, and it won't remove the part you want form array,
 insted it print the whole arrya and the removed part sapetrly*/
console.log(myn1);

console.log("B", myArr3);

//splice


const myn2 = myArr3.splice(1, 3)//it will remove the whole part form the array and print it freshly new
console.log("C", myArr3);
console.log(myn2);
































