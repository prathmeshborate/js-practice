//The Promise is an object representing eventual completion or failure of an asynchronous operation
//We attach a callback function to that promise object and whenever we have data inside or whenever a promise is resolved then callback function gets called automatically by promise
//Promise object is immutable
//State :- Pending, Fulfilled, Rejected
//Promise object contains:- Promise State, Promise Result
//Whenever there's promise inside promise chain then we need to return that promise in promise chain otherwise we loss data

/*
fetchdata('api')
.then((response) => response.json())
.then((data) => console.log(data))
*/

//imp example
const cart = ["apple","banana","Pineapple"];

createOrder(cart)
.then(function(orderId) {
    console.log(orderId)
    return orderId
})
.then(function(orderId) {
    proceedToPayment(orderId)
    return paymentId
})
.then(function(paymentId) {
    console.log(paymentId)
})
.catch(function(err) {
    console.log(err.message)
})

function createOrder(cart){
    const pr  = new Promise(function(resolve, reject) {
        if(!valideCart(cart)){
            const err = new Error("Not a Valid Cart")
            reject(err)
        }
        const orderId = 12345
        if(orderId){
            setTimeout(() => {
                resolve(orderId)
            }, 5000);
        }
    }) 
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject) {
        const paymentId = 4567
        resolve("Payment succesfull", paymentId)
    })
}

function valideCart(cart) {
    return true;
}