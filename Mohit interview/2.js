// first non repeteing charecter
let string = "hellloeh";

function bc(str){
for( char of str){
    if(string.indexOf(char)===string.lastIndexOf(char)){
        return char
       
       
    }
    return null
}}
 
console.log(bc(string)) //op/=o