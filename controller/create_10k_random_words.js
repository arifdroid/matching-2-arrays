
const fs = require('fs');
var randomWords = require('random-words');

// fs.writeFile('rand_5K_words.',)

let data_array_5k_words = randomWords(10000);

let data = JSON.stringify(data_array_5k_words);

fs.writeFileSync('./data/rand_10K_words.json',data)


// console.log(randomWords(5));
