// const divideArrayByTwo = (array) => {
//     outPut = [];

//     for(let i = 0; i < array.length; i++) {
//         outPut.push(array[i] / 2);
//     };

//     return outPut;
// }

// const myTestArray = [2, 4, 7, 9, 3];
// const testOne = divideArrayByTwo(myTestArray);
// console.log(testOne);





// const multiplyArrayByNine = (array) => {
//     multipliedArray = [];

//     for(let i = 0; i < array.length ; i++) {
//         multipliedArray.push(array[i] * 9);
//     }

//     return multipliedArray;
// }

// const testTwo = [3, 6, 9, 7, 2, 1, 5]
// console.log(multiplyArrayByNine(testTwo))




const highOrderFunction = (array, instructions) => {
    const outPut = [];
    for(let i = 0; i < array.length; i++) {
        outPut.push(instructions(array[i]));
    }
    return outPut;
}

const addingFunction = (input) => input + 50;

const testThree = [3, 9,6,4];

const result = highOrderFunction(testThree, addingFunction);

console.log(result);