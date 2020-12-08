const mqtt = require('mqtt');
const { settings } = require('../config/config');
const _port = settings._port;
const _url = settings._url;
const address = `mqtt://${_url}:${_port}`;
let counter = 1;

const client = mqtt.connect(address);
var topic = 'MQTT-POC';

client.on('connect', () => {
  console.log(`Publisher Connected => ${address}`);
  setInterval(() => {
    var baseMessage = `Hello ${counter++} from publisher!`;
    client.publish(topic, baseMessage);
    console.log('Message sent!', baseMessage);
  }, 5000);
});