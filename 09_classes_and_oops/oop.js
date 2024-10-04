const user = {
    username: "prath",
    loginCount: 8,
    getUserDetails: function(){
        // console.log("Got user Details");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()
// here new is a constructor


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}
const userOne = new User("Prathmesh", 12, true)
const userTwo = new User("Chai aur Code", 13, false)
console.log(userOne.constructor);
// console.log(userTwo);

// new key word creates empty object which is called instance, step 2 it calls constructor function, step 3 injects, step 4 gives output