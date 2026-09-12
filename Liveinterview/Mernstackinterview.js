// 1.
// {} + []       // "[object Object]" (in an expression context)
// [] + {}       // "[object Object]"
// {} + {}       // "[object Object][object Object]"
// [] + []       // ""

// console.log({}+[]);


//2.
//console.log(typeof NaN); // "number"

//3.
// let arr=[10,20,30];
// arr[10]=100;
// console.log(arr) //[ 10, 20, 30, <7 empty items>, 100 ]

//4.
let abc={a:120};
const q=abc;
q.a=200;
console.log(abc.a)