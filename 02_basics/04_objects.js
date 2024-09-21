"use strict"

// const tinderUser = new Object()
// here we have crreated single tone object.

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "Prath",
            lastname: "Bora"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) 
/*
allways add empty object at start wehn combining two or more objects otherwise all values will be added in object writen first
*/

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "some@emial,com"
    },
    {
        id: 1,
        email: "some@emial,com"
    },
    {
        id: 1,
        email: "some@emial,com"
    },
    {
        id: 1,
        email: "some@emial,com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(obj3));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Prath"
}

const {courseInstructor: instructor} = course
// its called destructuring
// console.log(courseInstructor);
console.log(instructor);


//JSON Formats (JavaScript Object Notation)
// {
//     "name": "Prath",
//     "coursename": "free",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]