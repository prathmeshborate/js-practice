"use strict"

const user = {
    name: "Prath",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.name = "Sam"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "Prath"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Prath"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Prath"
    console.log(this);
}
// chai()

// () => {} //arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// above is example of explicit return where when you use curly braces you need to use return key word
// const addTwo = (num1, num2) => num1 + num2
//this is example of implicit return where you can dont need to write return keyword just write whole code in single line.
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Prath"})

console.log(addTwo(3, 4));

// const myArray = [2, 5, 4]
// myArray.forEach(() => {})