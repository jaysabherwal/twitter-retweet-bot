console.log('Starting bot . . .');

var twit = require('twit');
var config;
try {
    config = require('./config');
} catch {
    console.log("config.js does not exist")
    process.exit();    
}

var T = new twit(config);

