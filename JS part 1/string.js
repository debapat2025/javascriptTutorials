//1.remove all white space fform string

// trim() → removes start + end whitespace
// trimStart() → removes start whitespace
// trimEnd() → removes end whitespace
// replace(/\s/g, "") → removes all whitespace
// replace(/\s+/g, " ") → converts multiple whitespace into one space

let str="         hello  world"
let returnstr= str.replace(/\s/g," ")
// let returnstr= str.replace(/\s+/g," ")
//console.log(returnstr)

//2. indexof cases -1 if not found
let strnew="hello  world"
console.log(strnew.indexOf("ssf"))
console.log(strnew.indexOf("world"))

//3 covert string into array
let old="helog,hgjhk"
let arr= old.split(",")
console.log(arr)

//4. reverse string
const str2="Hello";
const reversestr= str2.split("").reverse().join("")
console.log(reversestr)

//5. string is palindrom or not
//const str="HelleH";
function pali(str){
const reversestr= str.split("").reverse().join("")
console.log(reversestr)
if(str===reversestr)
{
    console.log("palindrom")
}
else{
    console.log("not palindrom")
}}

pali("deba")

//6.count the numbers of vowls on string
const str4="Hellea";
let count=0;

for(let char of str4){
    if("aeiouAEIOU".includes(char)){
        count ++;
        
    }
}   
    console.log(count,"vowels are")

   //another way
// let str = "Hello JavaScript";

// let vowels = str.match(/[aeiou]/gi);

// console.log(vowels.length);

//7.find first non reppeting charecter in string
let str5="Helleda";

for(let char of str5){
    if (str5.indexOf(char)===str5.lastIndexOf(char)){
       //retrun char;
      
      console.log(char)
       break;
    };
}

//8. 2 string are alam gram

let str1 = "listen";
let str2 = "silent";

let newstr1=str1.split("").sort().join("")
let newstr2=str2.split("").sort().join("")

if(newstr1===newstr2){
console.log("alamgam")
}
else{
    console.log("not")
}

//9. Capitalize the first letter of every word in a sentence.
let str1 = "listen me very carefully"; 
let newstr= str1.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1)).join(" ")
console.log(newstr)

//10.Count occurrences of each character in a string.


let str1 = "listehjjjhfeeec"; 
let count ={}

for(char of str1){
    if(count[char]){
        count[char]++
    }
    else{
        count[char]=1
    }
}

console.log(count)

//11.Remove all whitespace from a string.
//no 1 question
//another way

let str1 = "  l ist eh  jjj hf ee  e c ";
let str2= str1.trim()

console.log(str2.replaceAll(" ",""))


//12. Check whether a string contains only digits.

let str1 = "677543";
let item;
let isdigit=true
for(char of str1)
{
    
    if("0123456789".includes(char)){
        //console.log("all number", char)
        isdigit=false;
    }else{
       item=char;
       isdigit=true
    }
    
}
console.log(isdigit)

//13.Q10. Truncate a string to a given length and append "...".
let str = "dfdfdffddddddddddddddddddddddddddddd ";
let limit=15


function tuncate(str,limit){
return str.length>limit? str.slice(0,limit)+"...." : str

}

console.log(tuncate(str,limit))


//14.Find the longest word in a sentence.

//way1
let str = "hello hi gdgdgh ggttsjjj";
let str2=(str.split(" ")).reduce((a,b)=>b.length>a.length ? b:a);
console.log(str2)


//way2
let str = "hello hi gdgdgh ggttsjjj fffffffffffffff";

let longest=""
for(let char of str.split(" ")){
    if(char.length>longest.length){
        longest= char
    }
    
}
console.log(longest)

//15 Q13. Check if a string starts and ends with the same character.
let str = "hellohd";

let str2=str.split("");
console.log(str2.length)
if(str2[0]===str2[str2.length-1]){
    console.log("yes")
}
else{
    console.log("no")
}