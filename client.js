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

  return conn;
}

// 2. use object shorthand notation to export an object containing our connect function.
module.exports = { connect }