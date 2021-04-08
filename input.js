let connection; // 10. stores the active TCP connection object. Most global scope so it can be accessed by all functions in this module.
const net = require('net');
const { stdin } = require('process');

const setupInput = function(conn) {
  // 11. Update setupInput function within input module to accept a conn parameter and set it as the value for the connection variable.
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
  
}

const handleUserInput = function(key) {
  if (key === '\u0003') { 
    process.exit(); 
  }

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

}

stdin.on('data', (key) => {
  handleUserInput(key);
}); 

setupInput();

module.exports = { setupInput }