console.log('Starting bot . . .');

var twit = require('twit');
var config;
try {
    config = require('./config.js');
} catch {
    console.log("config.js does not exist")
    process.exit();    
}
var T = new twit(config.twitter);
var query = {
    q: config.query,
    count: 25,
    result_type: 'recent',
    lang: 'en'
};

function main() {
    T.get('search/tweets', query, retweet);
}

function retweet(error, data) {
    if(!error) {
        var randomNumber = Math.floor(Math.random() * query.count);
        var statusId = data.statuses[randomNumber].id_str;
        T.post(`statuses/retweet/${statusId}`, tweeted);
    } else {
        console.log(`\nThere was an error with your search (${query.q}): ${error}`)
    }
}

function tweeted(error) {
    if (error !== undefined) {
        console.log(`\nThere was an error while retweeting: ${error}`)
    } else {
        console.log(`\nRetweet sucessful!`)
    }
}

main();
setInterval(main, 1000 * 60 * 2);

