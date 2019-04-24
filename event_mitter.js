var events = require('events');
var eventEmitter = new events.EventEmitter();
 
// listener #1
var listner1 = function listner1() {
   console.log('listner1 worked.');
}
 
// listener #2
var listner2 = function listner2() {
  console.log('listner2 worked.');
}
 
// Connection with listner1 functions
eventEmitter.addListener('connection', listner1);
 
// Connection with listner2 functions
eventEmitter.on('connection', listner2);
 
var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening.");
 
// Connection trigger
eventEmitter.emit('connection');
 
// Remove listner1 connection.
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 not listening.");
 
// Connection trigger
eventEmitter.emit('connection');
 
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening.");
 
console.log("Finished.");