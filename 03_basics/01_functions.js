"use strict"

function sayMyName () {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
}

// sayMyName()

// function addTwoNum(number1, number2) {
//     console.log(number1  + number2);
// }

function addTwoNum(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNum(4, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Prathmesh"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, vsl2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user  = {
    username: "prath",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 500, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 500, 1000]));