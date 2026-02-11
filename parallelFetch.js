// api.js
// const fetch = require('node-fetch');

// Mock URLs
const urls = [
'https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2',
'https://jsonplaceholder.typicode.com/todos/3'
];

async function fetchAll() {
    try {
        const results = await Promise.allSettled(urls.map(url =>fetch(url).then(r => r.json())));
  results.forEach((res, i) => {

if (res.status ==='fulfilled')console.log(`API ${i + 1}:`, res.value);

else console.log(`API ${i + 1} failed:`, res.reason);
  });


    } catch (error) {
        console.error("the error", error);
    }
}

fetchAll();

