"use strict"

//singleton when object is created with constructor it is creatd as singleton
//Object.create


// object literals

const mySym  = Symbol("key1")

const JsUser = {
    name: "Prath",
    [mySym]: "myKey1",
    "full name": "Prath Bora",
    age: 23,
    location: "Jaipur",
    email: "prath@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

//when we write any key in double quotes it will only be accessed using square bracket and double quotes not using dot ( . )

// JsUser.email = "prath@yahoo.com"
// Object.freeze(JsUser) // makes object read only
// JsUser.email = "prath@block.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());