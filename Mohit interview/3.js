
//count the no of vowels
const strnew = " hello  world debarati";
const vowel=['a','e','i','o','u'];
 let v2=vowel.join('')
 //console.log(v2);
 
let count=0
function countvowel(str){
const str2= str.replaceAll(' ','')

//console.log(str2)
for(c of str2){
if(v2.includes(c)){
    count++
}}
return count
}

console.log(countvowel(strnew),"++++++++++")