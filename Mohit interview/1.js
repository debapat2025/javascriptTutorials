//frequency of each charecter instsing
let string = "helllo world my name is debarati";
let string2=string.replaceAll(" ","")
 //console.log(string2)
let count={};
for( char of string2)
{
   // console.log(count[char])
    if(count[char]){
        count[char]++
    }
    else{
        count[char]=1
    }
}
console.log(count)


//o/p:
// {
//   h: 1,
//   e: 3,
//   l: 4,
//   o: 2,
//   w: 1,
//   r: 2,
//   d: 2,
//   m: 2,
//   y: 1,
//   n: 1,
//   a: 3,
//   i: 2,
//   s: 1,
//   b: 1,
//   t: 1
// }