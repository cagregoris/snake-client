const net = require('net');

// 15. Modify client.js to require the 2 constants
const { IP, PORT } = require('./constants');

// 2. Move connect function to client.js file.
const connect = function() {
  
  const conn = net.createConnection({
    host: IP, // modify connect function to use our new constants.
    port: PORT
  });
  
  conn.setEncoding('utf8');
  conn.on('data', function(message) {
    console.log(message)
  })

  // 3. register another event handler: connect event. The connect event is triggered on a connection as soon as it is successfully established.
  conn.on('connect', function() {
    console.log('Successfully connected to game server')
  })
  
  // 4. Sending our name message so it appears next to our snake upon connection.
  conn.on('connect', () => {
    conn.write('Name: CAG')
    //conn.write('Move: up')
  })

  // 5. Tell the snake to move up one second after connecting (then comment out because this is just for practice):
  /*
  conn.on('connect', () => {
    setTimeout(() => {
      conn.write("Move: up")
    }, 1000)
  })
*/
  return conn;
}

// 2. use object shorthand notation to export an object containing our connect function.
module.exports = { connect }