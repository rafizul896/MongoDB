const http = require('http');
const fs = require('fs');

// creating a server using raw node.js
const server = http.createServer();

// listener
server.on('request', (req, res) => {
    if (req.url === '/readFile' && req.method === 'GET') {
        // streaming file reading
        const readableStream = fs.createReadStream('./texts/read.txt');

        readableStream.on('data', (buffer) => {
            res.write(buffer)
        })

        readableStream.on('end', () => {
            res.end('Hello from listener..!');
        })

        readableStream.on('error', () => {
            res.statusCode = 500;
            res.end('Something is Wrong!');
        })
    }
    console.log(req.url, req.method);
})

server.listen(5000, () => {
    console.log(`Server is running on port 5000`)
})