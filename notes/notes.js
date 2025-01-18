/*
var:- variables declared with var are scoped to the function in which they are declared
if declared outside any function, var becomes global variable
can reassign a value to it

Function Scope: Variables declared with var are function-scoped, so they are accessible anywhere within the function, regardless of the block (if, for, while, etc.) they are declared in.
*/
function exampleVar() {
    var x = 10;
    if (true) {
        var y = 20;
        console.log(x); // 10
    }
    console.log(y); // 20 - accessible here because 'var' is function-scoped
}
//----------
console.log(a); // undefined (declaration hoisted, initialization not hoisted)
var a = 10;
//------------
function exampleVar() {
    var x = 10;
    function fu () {
        var y = 20;
        console.log(x); // 10 - 'x' is accessible here because it's in the outer function scope
        console.log(y); // 20 - 'y' is accessible here because it's within the inner function scope
    }
    fu();
    console.log(y); // ReferenceError: y is not defined - 'y' is only accessible within the 'fu' function
}

exampleVar();



/*
let:- Block-scoped: Variables declared with let are scoped to the nearest enclosing block,  not the entire function or global scope.
Hoisting:- for let when we try to access it before initialization we get reference error
can reassign a value to it
*/
function exampleLet() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log(x); // 10
    }
    console.log(y); // ReferenceError: y is not defined - block-scoped
}
///--------------
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;


/*
const:- const is fully same like let in terms of block-scope and hoisting, but Variables declared with const cannot be reassigned. They are constant within their scope.
When you declare a variable using const, you must provide an initial value. This is because const stands for constant, meaning that once the variable is assigned a value, it cannot be reassigned.
If the const variable points to an object, the object itself can still be modified
*/
function exampleConst() {
    const x = 10;
    if (true) {
        const y = 20;
        console.log(x); // 10
    }
    console.log(y); // ReferenceError: y is not defined - block-scoped
}
//----------
console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 10;
//------------
const b = 10;
b = 20; // TypeError: Assignment to constant variable.
//-------------
const obj = { key: "value" };
obj.key = "newValue"; // Allowed
console.log(obj.key); // "newValue"
//--------------------------------------------------Hoisting note
//in terms of hoisting, for let and const, they are hoisted but they are assigned in a different memory space hence you cannot access it until you store value inside it and hence we get reference error
//TDZ(Temporal Dead Zone):- it is a time since when this let/const variable is hoisted and till it is initialized a value, that time between that is TDZ. in simple words time between hoisting and it gets value assigned


////++++++++++++block/scopes used in a place where javascript expects a single statement
//shadowing:- it also modifies the var a that is in outside of scope because they both are pointing to same memory space
//this happens because var has only function scope not a block scope
var a = 10
{
    var a = 100
    console.log(a); //100
}
console.log(a); //100

/*
Closure = A function bind together with its lexical environment
Function along with its lexical scope is a closure
When function is returned from another function it maintains its surrounding lexical scope
Function along with lexical scope bundled together is closure
Uses = Module Design Pattern, Currying, Functions like once, memoize, maintaining state in async world, setTimeout, Iterators, and many more
*/
function x() {
    var a = 7;
    function y(){
        console.log(a)
    }
    return y;
}

var z = x();
console.log(z);
z();

function x(){
    for(var i = 1; i <= 5; i++){
        function close(x){
            setTimeout(() => {
                console.log(x);                
            }, x * 1000)
        }
        close(i)
    }
}
x();