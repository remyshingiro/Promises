// Create a counter function that counts from 1 to 5, 
// with a 1-second delay between each number. The function 
// should return a promise that resolves with an array of all 
// the numbers when counting is complete. This tests your ability 
// to create async flows with timing and collect results over time.

// Requirements:

// - Function `asyncCounter()` counts 1, 2, 3, 4, 5
// - 1-second delay between each number
// - Return promise that resolves with `[1, 2, 3, 4, 5]`
// - Use async/await or promise chaining

function delays(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function counter() {
    let results = [];

    for(let i=1; i<=5;i++) {
        await delays(1000);
        console.log(i);
        results.push(i);
    }
    return results;
}

counter()
    .then(data => console.log("final result:", data))