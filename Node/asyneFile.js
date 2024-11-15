const fs = require('fs');

// reading text asynchronously
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) {
        throw Error('Error reading Text');
    }
    console.log(data);
    // writting data asynchronously
    fs.writeFile('./texts/write2.txt', data, 'utf-8', (err) => {
        if (err) {
            throw Error('Error');
        }
        console.log('Succesful');
    })
})
