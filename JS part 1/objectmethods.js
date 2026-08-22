//object methods examples are freeze, seal, assign, keys, values, entries, fromEntries,
//  hasOwnProperty, isPrototypeOf, propertyIsEnumerable, toString, valueOf


// 1. Object.keys()

// Returns an array containing all keys.
//1. Object.keys()
const user={
    name: "Debarati",
    age: 30,
    city:"katwa"
}

console.log(Object.keys(user))  //[ 'name', 'age', 'city' ]




//2. Object.values()
const user={
    name: "Debarati",
    age: 30,
    city:"katwa"
}

console.log(Object.values(user))  //[ 'Debarati', 30, 'katwa' ]


//3. Object.entries()
const user={
    name: "Debarati",
    age: 30,
    city:"katwa"
}

console.log(Object.entries(user))// [ [ 'name', 'Debarati' ], [ 'age', 30 ], [ 'city', 'katwa' ] ]

for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
} //name Debarati
// age 30
// city katwa


//4. Object.assign() :it is used for shallow copy of an object and merging multiple objects into one object. 
// It copies the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
const user={
    name: "Debarati",
    age: 30,
    city:"katwa"
}

const address={
    po:"katwa",
    dist:"burdwan",
    pin:713130
}

const fullprofile= Object.assign({},user,address);
console.log(fullprofile)



//5. Object.hasOwn()
console.log(Object.hasOwn(user, "name"));
// true

console.log(Object.hasOwn(user, "email"));
// false



//6. Object.freeze() :object.freeze() is a method that prevents any changes to an object.
//Object.freeze() is shallow, not deep.
const user = {
    name: "Debarati",
    age: 30
};

Object.freeze(user);

user.age = 35;
user.city = "Kolkata";

console.log(user); //{ name: 'Debarati', age: 30 }



// 7. Object.seal()
const user = {
    name: "Debarati",
    age: 30
};

Object.seal(user);

user.age = 35;
user.city = "Kolkata";

console.log(user); //{ name: 'Debarati', age: 35 }


//8. Object.create()
const person = {
    greet() {
        console.log("Hello");
    }
};

const user = Object.create(person);

user.greet();



let user={
    name:"Debarati",
    age:20
}

let student = Object.create(user);



console.log(student.name)


// 9. Object.fromEntries()

// Converts key-value pairs into an object.

const entries = [
    ["name", "Debarati"],
    ["age", 30]
];

const user = Object.fromEntries(entries);

console.log(user);


// 10. Object.is()

// Checks whether two values are the same using a slightly different comparison rule from ===.

console.log(Object.is(10, 10));
// true

console.log(Object.is("hello", "hello"));
// true

console.log(Object.is(NaN, NaN));
// true

console.log(NaN === NaN);
// false