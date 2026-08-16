//A closure is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.
function outer(){
    let message="hi world"

    function inner(){
        console.log(message)
    }
    return inner;
}

const outsidereturn= outer()
outsidereturn()


// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3

// Why are closures useful?

// One major use is data privacy.


function bankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount();

account.deposit(500);

console.log(account.getBalance()); // 1500