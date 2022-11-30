const randomItem = require('random-item');

const letras = function () {
    var letras = ["I'm sick of all this 'How'd you get your band named?'", "Oh man, you want a beer?", "If you want to destroy my sweeeeattterrr (oh, uoh uoooohhh)", 
    "I'm too depressed to go on", "All the girls in Los Angeles look like you from a distance",
    "We're so young and we're probably gonna die", "This is the last time I'll forget you, I wish I could!!!",
    "My darling, the past is told by those who win", "Tell my friends I'm coming down", 
    "I wish we were all rose-colored too", "Throw me into the fire, throw me and put me up again", 
    "GOD'S FAVORITE FUCKING BOY BAND", "LADIES STOP HITTING MY CELL", "so get your COKE OFF MY BUS",
    "but I think it's fine, it's cool", "My body is like an orphanage, we take everyone in",
    "Seems like each time I'm with you I'm losing my mind",
    "People who need people are the luckiest people in the world",
    "The Jesus of Suburbia is a lie",
    "You'll be better off without me, now",
    "Na na na na na na na na na na na na",
    "Believe your voice can mean something",
    "Sexy, sexy"]
    return randomItem(letras);
}

module.exports = letras();