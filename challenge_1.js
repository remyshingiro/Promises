async function getUserPosts(userId) {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    
    const result = {
      userId: userId,
      totalPosts: posts.length,
      posts: posts.map(post => post.title)
    };

    return result;
    
  } catch(error) {
    console.error("Error:", error);
  }

}

// Test it:
getUserPosts(10  )
    .then(result => console.log(result));