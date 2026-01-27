async function getUserPosts(userId) {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const name = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const nom = await name.json();
    const posts = await response.json();
    
    const result = {
      userName: nom.name,
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
getUserPosts(4)
  .then(result => console.log(result));