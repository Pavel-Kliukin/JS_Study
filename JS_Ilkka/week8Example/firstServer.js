'use strict';

const express=require('express');
const path = require('path');

const app = express();

const {port,host} = require('./config.json');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req,res)=>res.sendFile(path.join(__dirname,'home.html')));

app.post('/inputform',(req,res)=>res.json(req.body))

app.post('/inputspa', (req,res)=>res.json(req.body));

app.listen(port,host, ()=>console.log(`serving at ${host}:${port}`));