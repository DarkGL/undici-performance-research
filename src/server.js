import { createServer } from 'node:http';

createServer((req, res) => {
    res.end('hello world');
}).listen(3000);
