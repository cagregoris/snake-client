const net = require('net');

// 2. Move connect function to client.js file.
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.103',
    port: 50541
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
  })

  return conn;
}

// 2. use object shorthand notation to export an object containing our connect function.
module.exports = { connect }