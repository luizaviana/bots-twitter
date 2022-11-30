var Twit = require('twit');

const randomItem = require('random-item');
var schedule = require('node-schedule');
var Twitter = new Twit(require('./luiconfig'));
const puppeteer = require('puppeteer');


console.log("Rodando luibot");
    var date = new Date();
    const post = async function () {
        const frases = require('./frases')
        const scrapeRandomSong = require('./scrapeRandomSong');
        const scrapeLastSong = require('./scrapeLastSong')
        const link = require('./links');
        const letras = require('./letras')

        var arr = [scrapeRandomSong, scrapeLastSong, frases, letras, link];

        var tweet = await scrapeLastSong;
        Twitter.post('statuses/update',
        {
            status: tweet
        }),
        function(err, data, response) {
            console.log(data);
        }
        var date = new Date();
        console.log("Novo tweet!");
        console.log("O horário da postagem foi: " + date.getHours() + ":" + date.getMinutes());
        console.log("O tweet postado foi: " + tweet);
    }

    post();