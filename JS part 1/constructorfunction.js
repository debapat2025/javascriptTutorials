// A constructor function is a regular JavaScript function that is used to create multiple objects with the same structure and behavior.

// Think of it as a blueprint for creating objects.

//function name is always starts with a capital letter to distinguish it from regular functions.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Deba", 30);
const person2 = new Person("Rahul", 25);

console.log(person1);
console.log(person2);