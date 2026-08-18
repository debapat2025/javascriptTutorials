//with this we can change the this value of the function and we can use the function in different object with different this value.

////////////////////basic understanding of call and apply method////////////////////
// let user={
//     name:"Debarati",
//     age:30,
//     showDetails:function(){
//         console.log("My name is",this.name+ "and age is:"+ this.age)
//     }
// }

// let admin={
//     name:"Admin",
//     age:100
// }
// //user.showDetails()

// user.showDetails.call(admin)

// user.showDetails.apply(admin)



/////////////////////////////////////////////// seprate the function and call it with different this value/////////////////////////
let user={
    name:"Debarati",
    age:30,
   
}

let admin={
    name:"Admin",
    age:100
}


//  function showdetails(){
//         console.log("My name is",this.name+ "and age is:"+ this.age)
//     }



// showdetails.call(user)



//call : pass parameter one by one

 function showdetails(city,country){
        console.log("My name is",this.name+ "and age is:"+ this.age+ "city is"+city)
    }




showdetails.call(user,"kolkata","india")



//apply : pass parameter in array

 function showdetails(city,country){
        console.log("My name is",this.name+ "and age is:"+ this.age+ "city is"+city)
    }

    
showdetails.apply(user,["kolkata","india"])