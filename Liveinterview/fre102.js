//1
if([]){
    console.log("debarati")
}  //op is debarati. In JavaScript, an empty array [] is truthy.



//2
if([]==true){
    console.log("debarati")// ""== true is false. So, this block will not execute.The important thing is that == performs type coercion. turue became 1 and false is 0.
}
else{
    console.log("hello")
}

//Implicit coercion means JavaScript automatically converts one data type into another when performing an operation

//== → allows implicit type coercion
//=== → no type conversion; checks value + type
// so for === case all time print hello.



//3
var a=234;
if(function abc(){}){
    a=a+ typeof abc
}
console.log(a) //234undefined