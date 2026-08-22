// Prototype is object that other objects can inherites propertes and methods from it. 
// In JavaScript, every function has a prototype property that is used to attach properties and methods that should be shared among all instances of that function.

// we use proytotype for memory efficiency and memory savings.
function Person(name) {
  this.name = name;


}

Person.prototype.sayHello = function() {
  
    console.log("Hello, I'm " + this.name);
  };


const p1 = new Person("Alice");
const p2 = new Person("Bob");


p1.sayHello(); // Hello, I'm Alice
p2.sayHello(); // Hello, I'm Bob



/// writing own prototype function with array

let arr= ["dfdff","hhh","xxx"]

Array.prototype.Removefirst= function(){
 return this[0];
}

console.log(arr.Removefirst()) // it works like pop




//
let str="helgo"

String.prototype.Rev= function(){
 return this.split("").reverse().join("")
}

console.log(str.Rev())