

const marvel_heros = ["spiderman", "iornman", "hulk"];
const Dc_heros = ["Supenman", "Batman", "Flash"  ];

marvel_heros.push(Dc_heros);/*in this the Dc_heros are treated as 4th array, and If you do indexOf ("Dc_heros")
you'll get "3" as output, so it just merged one array to another but it won't actually add it */

console.log(marvel_heros); 
console.log(marvel_heros.indexOf("spiderman"));
console.log(marvel_heros[3][1]);/*this to access the 3rd element in marvel heros that,
is dc heros and in dc heros we accesed 1st element of it that is Batman*/




const allheros = marvel_heros.concat(Dc_heros);//unlike push actually add two arrays don't merge them
console.log(allheros);
 
const all_new_heros = [...marvel_heros,...Dc_heros]//spreads the array and kind of act like concat and you can add as may arrays as you want
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
const real_another_array2 = another_array.flat(1);

console.log(real_another_array2);

/*

=> .flat we use these prototype to do exactly what .concat did but .flat will do it with multiple arrays
that it will aadd multiple arrays in one array

=> In parantheses we have to adress how many arrays we have soleve, say for example there are 3 diffrent arrays
in one sigle array and we have to solve only 2 of that arrays we will put 2 in those paranthese so it'll soleve 
only 2 arrays in it

=> Here we used Infinity which you can also use for ease of purposes only It is not highly recomanded to do as we
did in above example by using infinity, though it will solve the whole array

=> And it is really important to put commans (,) after each element and put brackets also properly

*/

console.log(Array.isArray("Atharva"));/* to question wethere the given element is array or not we do this as we get data form 
multiple site we don't know what type of data it is and to as it we use .isArray*/

console.log(Array.from("Atharva"));//to convert data to array we use .from

// console.log(Array.form({name: "Atharva"}));// this will give you empty array

let socre1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(socre1, score2, score3));//it will add multiple elements from score 1,2,3 and give it in one array














 


