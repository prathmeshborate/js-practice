//Classes in JavaScript provide a clearer and more concise syntax for creating objects and dealing with inheritance. They are syntactic sugar over JavaScript's existing prototype-based inheritance.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const alice = new Person('Alice', 25);
  alice.greet(); // Outputs: 'Hello, my name is Alice and I am 25 years old.'
  

  //---------------------------------------
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Buddy', 'Golden Retriever');
  dog.speak(); // Outputs: 'Buddy barks.'

/*
  Explanation:

    Class Declaration: Defines a new class with a constructor and methods.

    Constructor: Initializes new instances of the class.

    Inheritance: extends keyword allows one class to inherit properties and methods from another class.

    Method Overriding: Subclass can override methods from the superclass using the same method name.
*/