// Here is the Questions 

// Q1 . 
// You are building a dashboard that needs to fetch:
// ```User profile → /api/user
// User posts → /api/posts
// User notifications → /api/notifications```

// All three endpoints are independent.

// Task: Fetch all three in the most efficient way.

// If one request fails:
// The others should still succeed.
// You should return whatever data was successfully fetched.

// Display a combined result like:

// ``` {
//   user: {...} | null,
//   posts: [...],
//   notifications: [...]
// }
// ```

// **⚠️ Constraints:**

// Use async/await
// Do NOT let one failed request stop the others.
// Avoid unnecessary sequential execution.

// Endpoints:
// User : https://jsonplaceholder.typicode.com/users/1
// Posts : https://jsonplaceholder.typicode.com/posts?userId=1
// Comments (as notifications alternative) → https://jsonplaceholder.typicode.com/comments?postId=1



async function dashboard() {
    try {
        const [userResponse, postResponse, commentResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
            fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        ]);


        const [users, posts, comments] = await Promise.all([
            userResponse.json(),
            postResponse.json(),
            commentResponse.json()
        ]);

        return {
            usee: users,
            postii: posts,
            comii: comments
        }
        
    } catch (error) {
        console.error("An error occured")
    }
};


dashboard().then(data => console.log(data))