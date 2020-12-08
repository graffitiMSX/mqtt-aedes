const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const { settings } = require('../config/config');
const _port = settings._port;

// const server = createServer(aedes);

server.listen(_port, function () {
  console.log(`Broker ready at port ${_port}`);
});
