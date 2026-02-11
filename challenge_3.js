async function createDashboard() {
    try {
        const [usersResponse, postsResponse, commentsResponse] =  await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/comments")
        ]);
        if(!usersResponse.ok || !postsResponse.ok|| !commentsResponse.ok){
            throw new error("One or more requests failed");
        }

        const [allUsers, allPosts, allComments] = await Promise.all([
            usersResponse.json(),
            postsResponse.json(),
            commentsResponse.json()
        ]);

        const users = allUsers.map(user => {
      // Count posts written by this user
      const userPosts = allPosts.filter(post => post.userId === user.id);
      const postsWritten = userPosts.length;

      // Count comments received on all their posts
      let commentsReceived = 0;
      userPosts.forEach(post => {
        const postComments = allComments.filter(
          comment => comment.postId === post.id
        );
        commentsReceived += postComments.length;
      });

      const averageCommentsPerPost = postsWritten > 0 
        ? commentsReceived / postsWritten 
        : 0;

      return {
        userId: user.id,
        name: user.name,
        postsWritten: postsWritten,
        commentsReceived: commentsReceived,
        averageCommentsPerPost: parseFloat(averageCommentsPerPost.toFixed(1))
      };
    });

    const mostActiveUser = users.reduce((max, user) => {
      return user.postsWritten > max.postsWritten ? user : max;
    });

    // Step 6: Find most popular user (most comments)
    const mostPopularUser = users.reduce((max, user) => {
      return user.commentsReceived > max.commentsReceived ? user : max;
    });

     const summary = {
      totalUsers: allUsers.length,
      totalPosts: allPosts.length,
      totalComments: allComments.length
    };

    // Step 8: Display results
    console.log('📊 USER DASHBOARD REPORT\n');
    console.log('=' .repeat(60));
    
    console.log('\n👥 ALL USERS:\n');
    users.forEach(user => {
      console.log(`${user.name} (ID: ${user.userId})`);
      console.log(`  📝 Posts: ${user.postsWritten}`);
      console.log(`  💬 Comments Received: ${user.commentsReceived}`);
      console.log(`  📊 Avg Comments/Post: ${user.averageCommentsPerPost}`);
      console.log('');
    });

    console.log('=' .repeat(60));
    console.log('\n🔥 MOST ACTIVE USER (Most Posts):');
    console.log(`   ${mostActiveUser.name} - ${mostActiveUser.postsWritten} posts`);

    console.log('\n⭐ MOST POPULAR USER (Most Comments):');
    console.log(`   ${mostPopularUser.name} - ${mostPopularUser.commentsReceived} comments`);

    console.log('\n📈 SUMMARY:');
    console.log(`   Total Users: ${summary.totalUsers}`);
    console.log(`   Total Posts: ${summary.totalPosts}`);
    console.log(`   Total Comments: ${summary.totalComments}`);
    console.log('\n' + '='.repeat(60));

    // Step 9: Return the complete dashboard
    return {
      users: users,
      mostActiveUser: {
        name: mostActiveUser.name,
        postsWritten: mostActiveUser.postsWritten
      },
      mostPopularUser: {
        name: mostPopularUser.name,
        commentsReceived: mostPopularUser.commentsReceived
      },
      summary: summary
    };
    
    } catch (error) {
        console.error("error:",error);
    }

}

// Test it:
createDashboard().then(result => {
  console.log('📊 Dashboard Report:\n');
  console.log('All Users:', result.users);
  console.log('\n🔥 Most Active:', result.mostActiveUser);
  console.log('⭐ Most Popular:', result.mostPopularUser);
  console.log('\n📈 Summary:', result.summary);
});