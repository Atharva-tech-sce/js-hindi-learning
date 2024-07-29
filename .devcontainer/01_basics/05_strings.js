//                                                                STRINGS                                                               //

const name = "Atharva"
const repoCount = " 50"
const Stars = " 100"

console.log(name + repoCount + Stars); this is bit old type of writting a code

console.log(`Hello my name is ${name} and my repo count is ${repoCount} and the number of stars on my repo are ${Stars} `);  
by using back ticks " `` " we can do string interpolatonz

const gameName = new String(`atharva-hc`)// "new String" this is used to define string in non-premetive operators like object, it has some additional properties from string prototype
// The prototype of String object provides properties that are available to all string instances

console.log(gameName[0]); //this gives the letter at Zero th value that is "a" in "atharvahc"
console.log(gameName.__proto__)

console.log(gameName.length);// here I accesed one of the properties of string that is length, to know the length of string
console.log(gameName.toUpperCase());// to uppercase the string
console.log(gameName.charAt(2));// to find on which index what character is character
console.log(gameName.indexOf("h"));// to find on which character what index is there

// Sting Substring

const NewString = gameName.substring(5,9);//we can't use -ve values in sub string, it simply assing string that is given input form index number
console.log(NewString)

//                                          STRING SLICEING STARTS FROM HERE                                                             //

// Example 1

const String1 = gameName.slice(1,10);//Positive indices: Start from the beginning of the string.
console.log(String1);

const String2 = gameName.slice(-1,10); //Negative indices: Start from the end of the string. 
console.log(String2) 

// Positive Indices: Start from 0.
// Negative Indices: Start from -1 

//Example 2

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(-9,-5)); /*In this example first it will first only slice till -9 "lazy dog." as -ve
 indices start counting form backwords, after that it will cut -5 out of the string that is " dog." output will be lazy */ 


// Example 3

const str1 = "Javascript is fun!"
console.log(str1.slice(-8,-4));// as we are giving -8 as output it'll slice string till " is fun!" and outof that we'll slice -4 "fun!" output is " is "


//                                                 STRING SLICEING ENDS HERE                                                            //

//  String Triming

const NewStringOne = "    hitesh      " 
console.log(NewStringOne);
console.log(NewStringOne.trim());// this will remove extra space, like in case user is giving his email and he is using space that is not requierd

// String Replace

const url = "https://atharvagulve.com/atharva%20gulve"// browser don't understand space in url so it replace it with %20

console.log(url.replace("%20", "-"));// so we just use replace like what we are replacing with what character like we are replacing %20 with hypen

console.log(url.includes("atahrva"));//here we use this to check if certain keywords are there in strings or not, here it will give output "True" cause atharva is in the url
console.log(url.includes("hitesh"));//here it will give output as "False" cause "hitesh" is not included in our string

// String to array

const webName = "Atharva-hc-com"//we can split strings into array thorigh "-", "space" and various diffrent things
console.log(webName.split("-"));//this will give output ["Atharva", "hc", "com"]

// All Prototypes of strings

/*
anchor:  ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split:ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()

*/



