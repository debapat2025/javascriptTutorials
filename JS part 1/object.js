// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method. 
// In addition to objects that are predefined in the browser, you can define your own objects.


// const user = {
//     name: "Debarati",
//     age: 30,
//     city: "Kolkata"
// };

// console.log(user);

const user = {
    name: "Debarati",
    address: {
        city: "Kolkata",
        state: "West Bengal"
    }
    
};


console.log(user["name"]);
// Debarati

const key = "age";

console.log(user[key]);
console.log(user["age"]);
// 30

//3. Adding a Property
user.email = "debarati@example.com";
console.log(user.email);


//update
user.age = 31;
//console.log(user);


//delete
delete user.age;
console.log(user);

//Nested Objects
// const user = {
//     name: "Debarati",
//     address: {
//         city: "Kolkata",
//         state: "West Bengal"
//     }
// };

console.log(user.address.city);
// Kolkata



//store function
const user = {
    name: "Debarati",
    age: 30,

    greet: function(city) {
        console.log("Hello " + this.name + " from " + city);
    },

    hello: function(){
return  this.greet("Dubai")
    }
};

//user.greet("Kolkata");
// Hello Debarati

user.hello()