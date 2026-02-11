function outer () {

    let counter = 0;

    function incrementCounter() {
        counter ++;
    }
    
    return incrementCounter;
}

const myNewFunction = outer();
console.log(myNewFunction())
console.log(myNewFunction())


































// function createFunction() {
//     function multiplyBy2 (num) {
//         return num * 2;
//     }
//     return multiplyBy2;
// }

// const generatedFunc = createFunction();

// const result = generatedFunc(3);
// // console.log(result)







// function outer() {
//     let counter = 0;

//     function incrementCounter() {
//         counter ++;
//     }
//     incrementCounter();
//     // return counter;
// }

// console.log(outer())






//calling a function outside of the function call in which it was defined
// where U define your function determines what vars ur function has access to when you call the func.










