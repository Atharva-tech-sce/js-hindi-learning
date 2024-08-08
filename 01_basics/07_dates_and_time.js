// Date

let myDate = new Date()

// console.log(myDate);//to print date and time in format of "YYYY-MM-DDTHH:MM:SS.SSSZ" where T seprate date&time "z" indicate in UTC
// console.log(myDate.toString());//toString() converts the Date object into a human-readable string format.
// console.log(myDate.toDateString());//toDateString() extracts only the date part of the Date object, omitting the time.
// console.log(myDate.toISOString());//toISOString() returns the date in ISO 8601 format, similar to the default string format.
// console.log(myDate.toJSON());//toJSON() converts the Date object into a JSON-compatible string.Internally, this method calls toISOString(), which is why you see the same output as toISOString().
// console.log(myDate.toLocaleDateString());//toLocaleDateString() formats the date according to the locale of your environment (likely the default for your system or browser settings).
// console.log(myDate.toLocaleString());//toLocaleString() provides both the date and time in the format that is localized to your environment.
// console.log(myDate.toLocaleTimeString());//toLocaleTimeString() extracts only the time portion of the Date object and formats it according to your locale. 12 hour format
// console.log(myDate.toTimeString());//toTimeString() returns the time portion of the Date object as a string, including the timezone. 24 hour format
// console.log(myDate.toUTCString());//toUTCString() converts the date to a string formatted in UTC. he format includes the day of the week, day of the month, month, year, time, and GMT
// console.log(myDate.getTimezoneOffset());//Returns the difference in minutes between your local timezone and UTC.

// console.log(typeof myDate);

// to declare specific or new date

let myCreatedDate = new Date(2024, 8, 23);//In javascript months starts from 0
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024, 8, 23, 9, 8, 30)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2024-07-8")



/*
 
=> JavaScript's Date object can automatically determine the day when you provide the 
year, month, and date

=> Months are zero-indexed, meaning January is 0, February is 1, and so on. So, 8 corresponds
to September

=> The Date constructor accepts the parameters in the order: year, month, day, hours, minutes, 
seconds, milliseconds.

=> If you have to extarcat only date or time or both you will have to give it specific commands 
like 
• toLocaleTimeString() = will only give time portion
• toDateString() = will only give date portiom
• toLocaleString() = will provide both time and date

=> But in array moths start from 01

*/







