// Hoisting is a javascript behavious where variable and function declairations are moved to the top of their scope during their memory creation phase.

//function delcataion
greet()
function greet(){
    console.log("hello ")
}

//o/p:hello

//function exporession
fruit()
var fruit= function(){
    console.log('it is function')
}

//o/p:TypeError: fruit is not a function

fruit()
let fruit= function(){
    console.log('it is function')
}
//o/p:ReferenceError: Cannot access 'fruit' before initialization



////////////////////////////////////////////////////////////////////////////////
//variables
console.log(fruit)
var fruit="apple"

//o/p= undefined as var fruit; is only going to top, declaration is going to top but value is not going to top. so it will be undefined.


//let and const
//let and const are hoisted, but they stay in temporal dead zone until intialization.
//Temporal dead zone is the time between access the variable and its initialization. If you try to access the variable before initialization, it will throw a reference error.

console.log(fruit)
let fruit="apple"
const fruit2="banana"

//o/p: ReferenceError: Cannot access 'fruit' before initialization
