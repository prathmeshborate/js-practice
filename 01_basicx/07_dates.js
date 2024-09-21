"use strict"

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

let myDateTwo = new Date(2023,0, 23, 5, 3)
// console.log(myDateTwo.toLocaleString());

let myDateThree = new Date("2023-02-14")
// console.log(myDateThree.toLocaleString());

let myDateFour = new Date("01-14-2023")
// console.log(myDateFour.toLocaleString());
// console.log(myDateFour.getTime());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
/* mostly used in `${newDate.getDay()} and time is...` like this. */

// console.log(newDate.toLocaleString('default', { weekday: "long" }));