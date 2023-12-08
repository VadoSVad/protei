"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = 3000;
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is your Node.js server!');
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
//# sourceMappingURL=index.js.map