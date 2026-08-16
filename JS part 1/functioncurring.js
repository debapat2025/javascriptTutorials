//Currying is a technique where we convert a function that takes multiple arguments at once into a sequence of functions, where each function takes one argument.

// Remember:
// Currying → one argument at a time → function returns another function.

function add(a){
 return function(b){
  return  a*b
 }
}

console.log(add(7)(9))


// Currying
//    ↓
// Break multiple arguments
//    ↓
// One argument at a time
//    ↓
// Create reusable/specialized functions
//    ↓
// Less repetition + better composition

//Currying improves code reusability and function composition. It allows us to create specialized functions by fixing some arguments in advance, reduces repeated values, and works well with closures and functional programming."

const multiply = (a) => (b) => a * b;

const multiplyBy10 = multiply(10);

console.log(multiplyBy10(11))