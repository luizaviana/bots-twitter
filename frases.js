const randomItem = require('random-item');

const frases = function () {
    var frases = ["Olá",
    "Um olá do bot!", "Como vcs estão meus colegas?", "Olá @", 
     "#soninho", "mark, king of zap zap", "meu coração é verde whatsapp", "quack",
    "#fominha", "OMG it's taylor"]
    return randomItem(frases);
}
module.exports = frases();