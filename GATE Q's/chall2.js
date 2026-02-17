// Implement a timeout for an asynchronous fetch request. 
// If the request takes longer than(5 milliseconds) , it should be aborted.  

// https://jsonplaceholder.typicode.com/users

// function timer() {
//     setTimeout(function time() {
//         console.log('timed on time')
//     },500)
// }

// console.log(timer())

const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => {
    controller.abort();
    console.log("request was aborted")
}, 50);

fetch('https://jsonplaceholder.typicode.com/users', {signal})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


    // const controller = new AbortController();
    // const signal = controller.signal;

    // setTimeout(() => {
    //     controller.abort();
    //     console.log("aborted")
    // },50)

    // fetch("https://jsonplaceholder.typicode.com/users", {signal})
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error))