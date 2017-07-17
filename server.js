import con from 'Connection.js';

const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Olá mundo');
})

app.listen(5000, function(){
    console.log('Server Running in localhost:5000');
});