// Imagine you are developing a real-time news application, 
// and you need to fetch posts from three different sources to provide users with the latest updates.

// The API endpoints for getting posts are:

// - https://dummyjson.com/posts
// - https://this-may-not-exist.com/posts
// - https://jsonplaceholder.typicode.com/posts

// To ensure a seamless user experience, you are 
// supposed to create a function called getFastPosts 
// that fetches posts from these endpoints simultaneously 
// (concurrently) and only presents data from the source that 
// responds the quickest, while ignoring slower or potentially unreliable sources.

// Example of how the function should be used

// ```jsx
// // getFastPosts() code here...

// getFastPosts().then((posts) => {
//     console.log(posts)
// })
// ```


// async function getFastPosts() {
//     const urls = [
//         "https://dummyjson.com/posts",
//          "https://this-may-not-exist.com/posts",
//          "https://jsonplaceholder.typicode.com/posts"
//     ] 
//     const fetchedPosts = urls.map(url => fetch(url).then(res=>{
//         if (!res.ok) throw new Error("Failed request");
//         return res.json()
//     }))

//     return Promise.any(fetchedPosts)
// }

// getFastPosts()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


async function handleFast() {
    const apis = [
        "https://dummyjson.com/posts",
         "https://this-may-not-exist.com/posts",
         "https://jsonplaceholder.typicode.com/posts"
]

    const fastChecker = apis.map(ap => fetch(ap).then(res => {
        if(!res.ok) throw new Error("failed api")
        return res.json()
    }))

        return Promise.any(fastChecker)
    }
handleFast()
    .then(data => console.log(data))
    .catch(error => console.log(error))