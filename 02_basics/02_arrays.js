"use strict"

const marvel = ["Thor", "Stark", "Captain"]
const dc = ["Batman", "Flash", "Homelander"]

// marvel.push(dc)
// when we try to push one array into another array it not adds two arrays its ats that array as a element
// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeros = marvel.concat(dc)
/*
when we use concat it adds two arrays and gives a new array it not adds in existing array
*/
// console.log(allHeros);

const all_new_arrays = [...marvel, ...dc]
// this is mostly used because using this we can add maultiple arrays together and create one new array
// console.log(all_new_arrays);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Prath"));
console.log(Array.from("Prath"));
console.log(Array.from({name: "Prath"})); // in this scenario it will give you empty array coz it doesnt know what array it should made keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
