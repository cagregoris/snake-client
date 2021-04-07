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

// 2. connect function was moved to client file and is now only referenced here.
const { connect } = require('./client');

console.log('Connectiong ...');
connect();
