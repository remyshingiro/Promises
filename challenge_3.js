async function createDashboard() {

}

// Test it:
createDashboard().then(result => {
  console.log('📊 Dashboard Report:\n');
  console.log('All Users:', result.users);
  console.log('\n🔥 Most Active:', result.mostActiveUser);
  console.log('⭐ Most Popular:', result.mostPopularUser);
  console.log('\n📈 Summary:', result.summary);
});