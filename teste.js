var Twit = require('twit');

var Twitter = new Twit(require('./config'));
const randomItem = require('random-item');
var schedule = require('node-schedule');

var tweet = "Just tell me I am the only one, even if it's not true, yeah"

var data = new Date();
console.log("O bot tweetará "+"'"+tweet + "' às " + data.getHours()+":00")

const j = schedule.scheduleJob('0 * * * *', function() {
    var date = new Date();
    Twitter.post('statuses/update',
    {
        status: tweet
    }),
    function(err, data, response) {
        console.log(data);
    }
    console.log("Novo tweet!");
    console.log("O horário da postagem foi: " + date.getHours() + ":" + date.getMinutes());
    console.log("O tweet postado foi: " + tweet);
})