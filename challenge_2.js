
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