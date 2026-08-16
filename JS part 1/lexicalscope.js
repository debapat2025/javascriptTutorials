//Lexical scope means that the accessibility of a variable is determined by where the variable is written in the code, not where the function is called.

let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }

    inner();
}

outer();

// Global Scope
//      ↓
//   a = 10

//    outer()
//      ↓
//   b = 20

//    inner()
//      ↓
//   c = 30

//the reverse is not  possible. outer() cannot access variables that belong to its child inner() scope.