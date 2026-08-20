//Map is a build in object in JavaScript that allows you to store key-value pairs. 
// It is similar to an object, but it provides better performance for certain operations and allows keys of any type.
//it is more Powerfull than object and more flexible
//keys can be of any type, including objects, functions, and primitive types.
//maintains the order of insertion of the key-value pairs, which means that when you iterate over the Map,
//  the entries will be returned in the order they were added.
// it has many build-in methods that make it easy to work with key-value pairs, such as set(), get(), has(), delete(), and clear().
// other methods include keys(), values(), and entries() which allow you to iterate over the keys, values, or key-value pairs in the Map.

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set(true, "Yes");
//console.log(myMap); 


console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age')); // Output: 30
console.log(myMap.get(true)); // Output: Yes

console.log(myMap.has('name')); // Output: true


myMap.delete('age');
console.log(myMap); 

console.log(myMap.has('age')); // Output: false

console.log(myMap.size); // Output: 2

for (let [key, value] of myMap) {
    console.log(key, value);
}

user.forEach((value, key) => {
    console.log(key, value);
});