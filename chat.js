// chat.js
const EventEmitter =require('events');
// here you can also use "import { EventEmitter } from "events";"
const chat =new EventEmitter();

// Listener for incoming messages
chat.on('message',(msg, user) => {
console.log(`New message: ${msg} from ${user}`);
});

// Send messages asynchronously
function sendMessage(msg, user,delay) {
setTimeout(() => {
    chat.emit('message', msg, user);
  }, delay);
}

// new user
// function newUser(msg, delay) {
//     setTimeout(() => {
//         chat.emit("new user:", msg)
//     }, delay)
// }

// Starter messages
// sendMessage("Hello!",1000);
// sendMessage("How are you?",2000);
// sendMessage("This is async chat.",1500);

// my calls
// sendMessage("I was added", 500);
// newUser("New", 300)

sendMessage("Muraho", "USER1", 13300);
sendMessage("Murakoze", "USER2", 2500);
sendMessage("Murabeho", "USER3", 3000);
