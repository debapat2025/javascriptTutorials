 let counter=0;
 const getData = () => {
  console.log("fetching data,,,,,,,,,,,,",counter++);
 }

 
 //debouncing
 let timer;
function debounceSearch() {
    clearTimeout(timer);

    timer = setTimeout(() => {
        getData();
    }, 500);
}

// Debouncing is a technique in JavaScript used to delay executing a function until the user stops triggering it for a certain amount of time.

// function debounce(fn, delay) {
//     let timer;

//     return function (...args) {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             fn(...args);
//         }, delay);
//     };
// }

// const debouncedSearchnew = debounce(getData, 500);