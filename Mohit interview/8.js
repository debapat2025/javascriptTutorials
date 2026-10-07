//map vs filter

const arr =["1","3","5","4","2"];

const arr2= arr.map((item,index)=>item*2)

console.log(arr2)

const arr3= arr.filter((item)=> item%2===0)

console.log(arr3)