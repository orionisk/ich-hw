import { EventEmitter } from 'events';

const chatEmitter = new EventEmitter();

function sendMessage(username, message, emitter) {
  emitter.emit('message', { username, message });
}

chatEmitter.on('message', ({ username, message }) => {
  console.log(`${username}: ${message}`);
});

sendMessage('Alice', 'Hello everyone!', chatEmitter);
sendMessage('Bob', 'Hi Alice, how are you?', chatEmitter);
sendMessage('Charlie', 'Hey folks!', chatEmitter);
