var Twit = require('twit');

var Twitter = new Twit(require('./config'));
const randomItem = require('random-item');
var schedule = require('node-schedule');

// mania lyrics: every line should be a tweet
var arr = [
    "I think I got too many memories getting in the way of me" +
    "\nI'm about to go Tonya Harding on the whole world's knee",
    "I'm about to go Tonya Harding on the whole world's knee",
    "And I'm stuck, night vision, so stuck, night vision" +
    "\nBut I come to life, come to life",
    "Some princes don't become kings",
    "Even at the best of times I'm out of my mind",
    "Even at the best of times I'm out of my mind" +
    "\nYou only get what you grieve",
    "Are you smelling that sh*t?",
    "Are you smelling that sh*t? Eau de résistance",
    "The only thing that's ever stopping me is me, hey!",
    "I testify if I die in my sleep" +
    "\nThen know that my life was just a killer dream, yeah",
    "Seems like the whole damn world went and lost its mind" +
    "\nAnd all my childhood heroes have fallen off or died",
    "All my childhood heroes have fallen off or died",
    "Fake tears, real living, fake tears" +
    "\nBut the alcohol never lies, never lies",
    "I was just an only child of the universe" +
    "\nAnd then I found you, and then I found you",
    "You are the sun and I am just the planets spinning around you",
    "You were too good to be true",
    "You were too good to be true, gold plated" +
    "\nBut what's inside you?",
    "I know this whole damn city thinks it needs you, but not as much as I do",
    "I wonder if your therapist knows everything about me",
    "'Cause you're the last of a dying breed" +
    "Write our names in the wet concrete",
    "'Cause you're the last of a dying breed",
    "Write our names in the wet concrete",
    "I'm here in search of your glory" +
    "\nThere's been a million before me",
    "That ultra-kind of love, you never walk away from",
    "You're just the last of the real ones",
    "My head is stripped, just like a screw that's been tightened too many times",
    "Just tell me I am the only one, even if it's not true, yeah",
    "I will shield you from the waves if they find you, I will protect you",
    "I'm here, at the beginning of the end"+
    "\nOh, the end of infinity with you",
    "I'm done with having dreams, the thing that I believe"+
    "\nOh, you drain all the fear from me",
    "Oh na na na na na na na na na na",
    "I never really feel a thing, I'm just kinda too frozen",
    "You were the only one, that even kinda came close",
    "I just pinch myself, no longer comatose"+
    "\nI woke up, no luck, I woke up, no luck",
    "And when your stitch comes loose, I wanna sleep on every piece of fuzz and stuffing that comes out of you",
    "I took too many hits off this memory, I need to come down",
    "An-n-n-n-n-n-n-n-nother day goes by, so hold me tight, hold me tight, or don't",
    "Oh n-n-no, no, this isn't how our story ends" +
    "\nSo hold me tight, hold me tight, or don't",
    "So hold me tight, hold me tight, or don't",
    "Hold me tight, or don't",
    "I got too high again",
    "I got too high again, realized I can't not be with you or be just your friend",
    "I love you to death, but I just can't" +
    "\nI just can't pretend, we were lovers first",
    "Confidants but never friends, were we ever friends?",
    "The distance between us, it sharpens me like a knife",
    "I was gonna say something that would solve all our problems, " +
    "but then I got drunk and I forgot what I was talking about",
    "There's nothing more cruel than to be loved by everybody but you",
    "If I can get my sh*t together, I'm gonna run away and never see any of you again",
    "I hope the roof flies off and we get blown out into space",
    "I always make such expensive mistakes",
    "I know it's just a number, but you're the 8th wonder" +
    "\nI'll stop wearing black when they make a darker color",
    "I know it's just a number, but you're the 8th wonder",
    "I'll stop wearing black when they make a darker color",
    "Woke up on the wrong side of p-p-paradise",
    "And when I say I'm sorry I'm late, I wasn't showing up at all" +
    "\nI really mean I didn't plan on showing up at all",
    "I hate all my friends",
    "I hate all my friends, I miss the days when I pretended with you",
    "I miss the days when I pretended with you, with you",
    "If we hadn't done this thing, I think I'd be a medicine man",
    "If we hadn't done this thing, I think I'd be a medicine man" +
    "\nSo I could get high on our own supply whenever I can",
    "I became such a strange shape, such a strange shape from trying to fit in",
    "If you were church, I'd get on my knees" +
    "\nConfess my love, I'd know where to be, my sanctuary, you're holy to me",
    "If you were church, I'd get on my knees",
    "Take the pain, make it billboard, big and swallow it for me",
    "Time capsule for the future, trust me, that's what I will be",
    "The things that you do in the name of what you love"+
    "\nYou are doomed but just enough",
    "I love the world, but I just don't love the way it makes me feel",
    "Got a few more fake friends and it's getting hard to know what's real",
    "And if death is the last appointment,"+
    "\nThen we're all just sitting in the waiting room (Mr. Stump?)",
    "Mr. Stump?",
    "I am just a human trying to avoid my certain doom",
    "One look from you and I'm on that faded love" +
    "\nOut of my body and flying above",
    "If there were any more left of me, I'd give it to you",
    "And I'll tell you that I am fine, but I'm a missile that's guided to you",
    "Go out in the world to start over again and again, as many times as you can",
    "And in the end, if I don't make it on the list, would you sneak me a wristband?",
    "Go out in the world to start over again and again, as many times as you can" +
    "\nAnd in the end, if I don't make it on the list, would you sneak me a wristband?",
    "Give me a boost, a boost over heaven's gate, yeah",
    "I'm gonna need a boost," +
    "\n'Cause everything else is a substitute for your love",
    "I got dreams of my own, but I want to make yours come true, so please come through",
    "You're the one habit I just can't kick",
    "You're the one habit I just can't kick" +
    "\nYou're the one habit I just can't kick",
    "I'm calling you from the future, to let you know we've made a mistake",
    "And there's a fog from the past that's giving me, giving me such a headache",
    "And I'm back with a madness, I'm a champion of the people who don't believe in champions",
    "I got nothing but dreams inside",
    "And I'm back with a madness, I'm a champion of the people who don't believe in champions" +
    "\nI got nothing but dreams inside",
    "I got nothing but dreams",
    "I'm just young enough to still believe, still believe, but young enough not to know what to believe in",
    "I'm just young enough to still believe, still believe, but young enough not to know what to believe",
    "If I can live through this, if I can live through this, I can do anything",
    "If I can live through this, I can do anything",
    "Champion, champion",
    "I can do anything, I can do anything",
    "I can do anything",
    "Anything, anything, yeah",
    "I got rage every day, on the inside",
    "The only thing I do is sit around and kill the time",
    "I got rage every day, on the inside" +
    "\nThe only thing I do is sit around and kill the time",
    "I'm trying to blow out the pilot light",
    "I'm trying to blow out the light",
    "I don't even have my own attention",
    "You say, 'Please don't ever change,' but you don't like me the way I am",
    "The sign says 'Don't you tap the glass', but I read it in reverse: 'ssalg eht pat uoy t'nod syas ngis ehT'",
    "The world tried to burn all the mercy out of me",
    "The world tried to burn all the mercy out of me" +
    "\nBut you know I wouldn't let it",
    "It tried to teach me the hard way," +
    "\nI can't forget it",
    "Driving down the coast again" +
    "\nThe pills are kicking in, the pills are kicking in",
    "The pills are kicking in, the pills are kicking in",
    "She said, 'I love you 'til I don't'",
    "I am just playing house, no idea what I'm doing now",
    "There are no atheists in foxholes",
    "The pressure's getting to me, it's time to throw in the towel",
    "'Cause I'm stuck in the sunshine riptide"+
    "\nDancing all alone in the morning light",
    "The sunshine riptide" +
    "\nYou came back like a wave when I was feeling alright",
    "You came back like a wave when I was feeling alright",
    "The sunshine",
    "Call me Oluwaburna, I fell in love, but I didn't fall down",
    "Smoking in my f*ckin' brain, passing through my f*ckin' guys" +
    "\nFeel like I'm bulletproof, bulletproof, baby",
    "With the sun shining through, got the blunt and the juice"+
    " ridin' through the sunshine riptide",
    "Dancing all alone in the morning light",
    "Sun, sun, sun, sun, sun",
    "You are my truest feeling yet",
    "I love you so much, it's just like oxygen"+
    "\nAnd it's going to my head",
    "A public meltdown, petulant but irreverent",
    "Take all your possibilities then take away the limits,"+
    "\nTake your ideas and throw away all the gimmicks",
    "I do the best with what I have",
    "We've gone way too fast for way too long" +
    "\nAnd we were never supposed to make it half this far",
    "And I lived so much life",
    "And I lived so much life, lived so much life" +
    "\nI think that God is gonna have to kill me twice, like my name was Nikki Sixx",
    "I woke up in my shoes again but somewhere you exist singing: 'Oops I, did it again'",
    "Oops I, did it again",
    "I forgot what I was losing my mind about",
    "Oops, I did it again, I forgot what I was losing my mind about",
    "I only wrote this down to make you press rewind"+
    "\nAnd send a message: I was young and a menace",
    "I was young and a menace",
    "I only wrote this down to make you press rewind and send a message: I was young and a menace",
    "Young and a menace",
    "Woke up on the wrong side of reality",
    "Woke up on the wrong side of reality" +
    "\nAnd there's a madness that's just coursing right through me",
    "And as far as the time, far as the time"+
    "\nNot sure I'm there yet but I'm certain I've arrived",
    "Not sure I'm there yet but I'm certain I've arrived",
    "I'm just here flying off the deep end"+
    "\nI'm just here to become the best yet"+
    "\nI'm just here for the psych assessment"+
    "\nI'm just here for the fall!",
    "I'm a menace",
    "And I'm down!",
    "We've gone way too fast for way too long",
    "I'm pedal to the metal, make no mistake",
    "I'm pedal to the metal, make no mistake" +
    "\nThis is my pity party, pity party",
    "I'm living out of time, eternal heatstroke",
    "Spiritual revolt from the waist down, from the waist down",
    "I'm living out of time, eternal heatstroke" +
    "\nSpiritual revolt from the waist down, from the waist down",
    "I'm just a full tank away from freedom" +
    "\nSpitfire",
    "I'm just a full tank away from freedom",
    "Spitfire",
    "These are the last blues we're ever gonna have",
    "These are the last blues we're ever gonna have"+
    "\nLet's see how deep we get",
    "The glow of the cities below lead us back" +
    "\nTo the places that we never should have left",
    "The last, the last, the last",
    "I got a feeling inside that I can't domesticate",
    "I got a feeling inside that I can't domesticate" +
    "\nIt doesn't wanna live in a cage, a feeling that I can't housebreak",
    "The last, the last, the last"+
    "\nThe last, the last, the last",
    "And I'm yours 'til the earth starts to crumble and the heavens roll away" +
    "I'm struggling to exist with you and without you, yeah",
    "I'm struggling to exist with you" +
    "\nAnd without you I'm just a full tank away from freedom",
    "The last blues",
    "I'm sifting through sand, sand, sand looking for pieces of broken hourglass",
    "I'm sifting through sand, looking for pieces of broken hourglass" +
    "\nTrying to get it all back, put it back together, as if the time had never passed",
    "I know I should walk away, know I should walk away" +
    "\nBut I just want to let you break my brain" +
    "\nAnd I can't seem to get a grip, no matter how I live with it",
    "And I can't seem to get a grip, no matter how I live with it",
    "The last blues we're ever gonna have",
    "These are the last blues..."
];

console.log("Bot das horas rodando")
const j = schedule.scheduleJob('0 * * * *', function() {
    var tweet = randomItem(arr)
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