// bind method is used to bind the function with the object and return a new function with the same body and scope but with the this keyword set to the provided value.

let user={
    name:"Debarati",
    age:30,
   
}

let admin={
    name:"Admin",
    age:100
}


// function showdetails(){
//         console.log("My name is",this.name+ "and age is:"+ this.age)
//     }
// showdetails.bind(admin)()


 function showdetails(city){
        console.log("My name is",this.name+ "and age is:"+ this.age+ "city is"+city)
    }

let boundFunction = showdetails.bind(admin)
console.log(boundFunction("kolkata"))
