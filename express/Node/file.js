const fs = require('fs');
// reading a file text
const readText = fs.readFileSync('./texts/read.txt', 'utf-8');

// writing a file text
const writenText = fs.writeFileSync('./texts/write.txt',readText + 'This is Written Text.');
console.log(writenText);