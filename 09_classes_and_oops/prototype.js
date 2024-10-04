// let myName  = "prath"
// console.log(myName.trueLength);

/*
myHeros = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "hammer",
    Spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.Spiderman}`);
    }
}
Object.prototype.prath = function(){
    console.log("Prath is present in all object");
}
Array.prototype.heyPrath = function(){
    console.log("Prath says hello");
    
}
// heroPower.prath()
myHeros.prath()
myHeros.heyPrath()
// heroPower.heyPrath()
*/



// inheritance

const User = {
    name: "Chai",
    email: 'chai@example.com'
}

const Teacher = {
    makeVideo: true
}

const teachhingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachhingSupport
}
Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(teachhingSupport, Teacher)


let anotherUsername = "prath    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"prath".trueLength()
"bora".trueLength()