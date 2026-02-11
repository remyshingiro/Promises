// Create a function called fetchUserTodos that uses the
//  Promise.all() method to fetch users and todos concurrently 
// from the provided API endpoints and combine them based on the 
// userId. The function should return a promise that resolves with 
// the combined data.

// - Users endpoints https://jsonplaceholder.typicode.com/users
// - Todos endpoints https://jsonplaceholder.typicode.com/todos

// The returned promise should resolve into an array of users, 
// where each user object has a new key todos. This key should
//  contain an array of todos that belong to the user, determined 
// by matching the userId of the todo with the id of the user.

// ```jsx
// // User object may look like
// {
//     id: 10,
//   name: 'Clementina DuBuque',
//   ...
// }

// // Todo object may look like
// {
//     userId: 5,
//   completed: false,
//     ...
// }

// // The result array will have objects that look like

// {
//     id: 10,
//   name: 'Clementina DuBuque',
//   todos: [
//         {
//             userId: 10,
//           completed: false,
//             ...
//         },
//         {
//             userId: 10,
//           completed: false,
//             ...
//         }
//     ]
//     ...
// }
// ```





async function fetchUserTodos() {
    try {
        const [userResponse, todoResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/todos')
         ])

         if(!userResponse.ok || !todoResponse.ok) {
            throw new Error("one or more requests failed");
         }

         const [ allUsers, allTodos] = await Promise.all([
            userResponse.json(),
            todoResponse.json()
         ])

         const combinedData = allUsers.map(user =>{
            return {
                ...user,
                todos: allTodos.filter(todo => todo.userId === user.id)
            }
         })
         return combinedData;


    } catch (error) {
        console.error("error occured")
    }
    
}
fetchUserTodos().then(data => console.log(data))



// async function fetchUserTodos() {
//     try {
//         const [userResponse, todoResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/users'),
//             fetch('https://jsonplaceholder.typicode.com/todos')
//         ]);

//         if (!userResponse.ok || !todoResponse.ok) {
//             throw new Error("One or more requests failed");
//         }

//         const [allUsers, allTodos] = await Promise.all([
//             userResponse.json(),
//             todoResponse.json()
//         ]);

//         const combinedData = allUsers.map(user => {
//             return {
//                 ...user,
//                 todos: allTodos.filter(todo => todo.userId === user.id)
//             };
//         });

//         return combinedData;

//     } catch (error) {
//         console.error("Error occurred:", error.message);
//     }
// }

// fetchUserTodos().then(data => console.log(data));
