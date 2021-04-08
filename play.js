//This is our main file through which we will launch the game client.

/*

// 1. Connecting to the server. 
const net = require('net');

//    1a. Establish connection with the game server. Add a function connect which establishes a connection and returns the resulting object:
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.103',
    port: 50541
  });
  //    1b. Interpret incoming data as text:
  conn.setEncoding('utf8');
  // 2. Update the connect function to also attach an event handler to handle incoming data and console log it for the player.
  conn.on('data', function(message) {
    console.log(message)
  })

  // 1c.
  return conn;
}

// 1c.
console.log('Connectiong ...');
connect();

*/


const net = require('net');
const { stdin } = require('process');

// 2. connect function was moved to client file and is now only referenced here.
const { connect } = require('./client');
// 9. setupInput function was moved to input file and is now only referenced here.
const { setupInput } = require('./input'); 

console.log('Connectiong ...');

// 12. Update setupInput call to send the connection object returned from connect() into our setupInput() function. 
//      12a. Our input module can now use the connection variable to send movement commands/messages to the server.
setupInput(connect());

/*
// 6. Setup user interface. Specifically, so that we can handle user input via stdin:
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
// 7. call function from within play.js:
setupInput();

// 8. Create a function handleUserInput and register it as the "data" callback handler for stdin. Register within the setupInput function, prior to returning the stdin object. 
//    handleUserInput should check for the ctrl + c input and terminate the game
const handleUserInput = function(key) {
  if (key === '\u0003') { // checking for ctrl + c input
    process.exit(); // terminates game if ctrl + c input is found.
  }
}

stdin.on('data', handleUserInput); // registered as the "data" callback handler for stdin.
*/
