'use strict';

const http = require('http');

const port=3000;
const host='localhost';//'127.0.0.1';

const server = http.createServer((request, response)=>{

    response.writeHead(200,{
        // "Content-Type":"text/plain"
        "Content-Type":"text/html"
    });
    // response.write('sdsadsad');
    // response.end();
    response.end('<h1>Hello world!</h1>');
});

server.listen(port,host, 
        ()=>console.log(`Server ${host}:${port} is serving`));