const mqtt = require('mqtt');
const { settings } = require('../config/config');
const _port = settings._port;
const _url = settings._url;
const address = `mqtt://${_url}:${_port}`;

const client = mqtt.connect(address);
var topic = 'MQTT-POC';

client.on('message', (topic, message) => {
  message = message.toString();
  console.log('Message received: ', message);
});

client.on('connect', () => {
  console.log(`Client Connected => ${address}`);
  client.subscribe(topic);
});