// async function getUserPosts(userId) {
//     try {
//         const users = await fetch("https://jsonplaceholder.typicode.com/users");
//         const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const comments = await fetch("https://jsonplaceholder.typicode.com/comments");

//         const allUsers =  users.json();
//         const allPosts =  posts.json();
//         const allComments = comments.json();

//         userMap = {};
//         allUsers.forEach(user => {
//             userMap[user.id] = user.name;
//         });

//         commentsOfPosts = posts.map(post => {
//             const commentCount = allComments.filter(comment => {
//                 comment.postId === post.id
//             }).length;
//         });

//         const authorName = userMap[post.userId];

        

//         return {
//         postId: post.id,
//         title: post.title,
//         authorName: authorName,
//         commentCount: commentCount
//       }
        
//       commentsOfPosts.sort((a, b) => b.commentCount - a.commentCount);

//       const topPosts = postsWithComments.slice(0, userId);

//     } catch (error) {
//         console.error("error:", error);
        
//     }

// }

// // Test it:
// getUserPosts(1)
//     .then(result => console.log(result));



async function getTopPosts(num) {
    try {
        const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/comments")
        ]);

        const [allUsers, allPosts, allComments] = await Promise.all([
            usersResponse.json(),
            postsResponse.json(),
            commentsResponse.json()
        ]);

        const userMap = {};
        allUsers.forEach(user => {
            userMap[user.id] = user.name;
        });

        const postsWithComments = allPosts.map(post => {
            const commentCount = allComments.filter(
                comment => comment.postId === post.id  
            ).length;
            
            const authorName = userMap[post.userId];

            return {
                postId: post.id,
                title: post.title,
                authorName: authorName,
                commentCount: commentCount
            };
        });
        postsWithComments.sort((a, b) => b.commentCount - a.commentCount);
        const topPosts = postsWithComments.slice(0, num);
        return topPosts;

    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Test it:
getTopPosts(5).then(result => console.log(result));