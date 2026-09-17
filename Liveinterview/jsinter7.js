//1.
// You mean IIFE — Immediately Invoked Function Expression.

// An IIFE is a function that is created and executed immediately, without needing to call it separately.

(function sum(){
    console.log(3+8);
})()


//2
//Falsy: false, 0, -0, 0n, "", null, undefined, NaN

Boolean(false)     // false
Boolean(0)         // false
Boolean(-0)        // false
Boolean(0n)        // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false




Boolean(" ")   // true
Boolean("0")   // true
Boolean([])    // true
Boolean({})    // true



//3.
// undefined = declared, but no value.
// Not defined = not declared at all.

let x;        // declared → undefined

console.log(y); // y was never declared → not defined


//4. It converts to nukber
console.log("debarati"-"maman") // NaN - NaN=NaN
console.log("10"-"4") //6


//5.find 2nd samllest element or sort an assay
 let arr = [10, 5, 8, 2, 20, 3];

arr.sort((a, b) => a - b);

console.log(arr[1]);


//let arr1=[10,20,50,30,40]
// function seciondsml(arr){

// const newarr=arr.sort((a,b)=>a-b);
// return newarr[1]
// }

// console.log(seciondsml(arr1))

//6. union of ttwo arrays
let arr1=[10,20,50,30,40];
let arr2=[60,70,80,90]

let unionarr=[...arr1,...arr2]
console.log(unionarr)


//7. remove duplicatte
let duplicatearr=new Set([...arr1,...arr2])
console.log(duplicatearr)

//8.common element
let common = arr1.filter((num)=> arr2.includes(num))
console.log(common)


//9. differnt types of alert
// | Method      | Purpose       | Return value     |
// | ----------- | ------------- | ---------------- |
// | `alert()`   | Show message  | `undefined`      |
// | `confirm()` | Ask OK/Cancel | `true` / `false` |
// | `prompt()`  | Get input     | String / `null`  |


//10.use strict

//11. errors in js
// | Error            | Meaning                     | Example                   |
// | ---------------- | --------------------------- | ------------------------- |
// | `SyntaxError`    | Invalid syntax              | `if (true {`              |
// | `ReferenceError` | Variable doesn't exist      | `console.log(x)`          |
// | `TypeError`      | Wrong type/operation        | `"hello"()`               |
// | `RangeError`     | Value outside allowed range | `new Array(-1)`           |
// | `URIError`       | Invalid URI                 | `decodeURIComponent("%")` |
// | `EvalError`      | Related to `eval()`         | `new EvalError()`         |
