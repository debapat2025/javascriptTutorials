
const fruit =["apple", "banana", "mango","apple","mango"]
// o/p:{ apple: 2, banana: 1, mango: 2 }  same as1.js

let count={}

for(char of fruit){
    if(count[char]){
        count[char]++
    }
    else{
        count[char]=1
    }
}

console.log(count)




//another way to do this is using reduce method

const abc = [1, 2, 3, 4];

const sum = abc.reduce((acc, result) => {
    return acc = result + acc;
});

console.log(sum);