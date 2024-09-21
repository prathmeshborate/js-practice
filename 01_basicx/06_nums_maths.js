"use strict"

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // you can convert number to string using toString() and use String functions on that

// console.log(balance.toFixed(2));

const otherNumebr  = 23.8966
// console.log(otherNumebr.toPrecision(2));

const hundreds  = 1000000
// console.log(hundreds.toLocaleString('en-iN'));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 2, 8, 10));
// console.log(Math.max(4, 3, 2, 8, 10));

const randomNum = (Math.random() * 10000).toPrecision(4) // random otp generate like this
// console.log(randomNum);

console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
