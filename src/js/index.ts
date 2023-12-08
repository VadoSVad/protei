import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World Typescript + Node.JS');
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});