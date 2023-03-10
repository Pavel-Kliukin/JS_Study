'use strict';

const express=require('express');
const path = require('path');

const app = express();

const {port,host} = require('./config.json');

const {
    getAllFromStorage,
    getFromStorage,
    addToStorage,
    updateStorage,
    removeFromStorage } = require('./storage/storageLayer');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());

app.get('/', (req,res)=>
    res.sendFile(path.join(__dirname,'home.html')));

app.post('/inputspa', async (req,res)=>{
    const status= await addToStorage(req.body);
    const message=status?'addition OK':'Not added';
    res.json({message});
});

app.listen(port,host, 
        ()=>console.log(`serving at ${host}:${port}`));