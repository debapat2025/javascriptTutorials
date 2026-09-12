// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     };
// }

// console.log(add(10)(20)(30));

function add(a) {
    return function(b) {
        if (b) {
            return add(a + b);
        }
        return a;
    };
}

console.log(add(1)(2)(3)(4)(5)());