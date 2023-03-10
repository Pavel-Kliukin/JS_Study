'use strict';

const http = require('http');


const port=3000;
const host='localhost';

const {
    getBooksOfPerson,
    getTheNamesOfBooks,
    getTheTotals,
    getTheOwnerOfBook,
    getAllBooks
} = require('./storage/bookstorage');

const server= http.createServer(async (req,res)=>{
    const {
        pathname,
        searchParams} = new URL(`http://${req.headers.host}${req.url}`);
    const route=decodeURIComponent(pathname);

    if(route==='/books'){
        const firstname=searchParams.get('firstname');
        const lastname=searchParams.get('lastname');
        const data = await getBooksOfPerson(firstname,lastname);
        sendJson(res,data);

        // getBooksOfPerson(firstname, lastname)
            // .then(data=>sendJson(res, data));
    }
    else if(route==='/names'){
        const firstname = searchParams.get('firstname');
        const lastname = searchParams.get('lastname');
        const data = await getTheNamesOfBooks(firstname, lastname);
        sendJson(res, data);
    }
    else if (route === '/totals') {
        const firstname = searchParams.get('firstname');
        const lastname = searchParams.get('lastname');
        const data = await getTheTotals(firstname, lastname);
        sendJson(res, data);
    }
    else if(route==='/owner'){
        const name=searchParams.get('name');
        const data = await getTheOwnerOfBook(name);
        sendJson(res,data);
    }
    else if(route==='/booknames'){
        const value=searchParams.get('value');
        const data = await getAllBooks(value);
        sendJson(res,data);
    }
    else{
        sendJson(res,{error:'Not found'},404);
    }
});

server.listen(port,host,
     ()=>console.log(`Bookserver serving at ${host}:${port}`));

function sendJson(res, data, status=200){
    const jsonData = JSON.stringify(data);
    res.writeHead(status, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    });
    res.end(jsonData);
}