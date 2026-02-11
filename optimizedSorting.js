// Rick wants a faster way to get the product of the largest pair in an array. 
// Your task is to create a performant solution to find the product of the largest
//  two integers in an array of positive numbers.

// Rick is only interested in solutions that are faster than his,
//  which has a running time of O(n log n).

// [2, 6, 3]                      => 18 = 6 * 3
// [2, 1, 5, 0, 4, 3]             => 20 = 5 * 4
// [7, 8, 9]                      => 72 = 8 * 9
// [33, 231, 454, 11, 9, 99, 57]  => 104874 = 231 * 454


const maxProduct = (a) => {
    let n1 = Math.max(a[0], a[1]);
    let n2 = Math.min(a[0], a[1]);

    for(let i = 2; i < a.length; i++) {
        let current = a[i];

        if(current > n1) {
            n2 = n1;
            n1 = current;
        } else if(current > n2) {
            n2 = current;
        }
    }

    return n1 * n2;
}

const array = [3,6, 2,8];
console.log(maxProduct(array))