//this keyword is special keyword and used to refer the current object in which the function is called.

// let user={
//     name:"deba",
//     age:30,
//     details: function(){
//         console.log("hello guyes my city is "+address.city+"my name is"+this.name)
//     }
// }

// let address={
//     city:"katwa",
//     dist:"burdwan"
// }
// user.details()


//this keyword with arro function and normal function

//arrow function does not have its own "this" value. It inherits this from the parent scope (lexical scope) at the time it is defined. In contrast, a normal function has its own this value, which is determined by how the function is called.
var name="ffdf"
let user={
    name:"deba",
    age:30,
    details:()=>{
        console.log("hello guyes my city is "+address.city+"my name is"+this.name)
    }
}

let address={
    city:"katwa",
    dist:"burdwan"
}
user.details()