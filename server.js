const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to page');
    }
    else if (req.url === '/about') {
        res.end('About');
    }
    else {
        res.end(`<h1>Opps</h1><p>We can't find the find</p><a href='/'>Back Home</a>`);
    }
});

server.listen(5000);