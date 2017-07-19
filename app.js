//imports nescessarios
require('getmodule');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');
const express = require('express');
const app = express();
var rotas = require('./routes/rotas');

app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password : 'usbw',
        port : 3307, //port mysql
        database:'bddietgame'
    },'request')
);

app.use('/', rotas);

module.exports = app;
