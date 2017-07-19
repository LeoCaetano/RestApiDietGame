var express = require('express');
var app = express.Router();
var Alimentos = getmodule('api/alimentosBD');


/* GET home page. */
app.route('/alimentos')
	.get(Alimentos.read);


app.route('/alimentos/:id')
	.get(Alimentos.profile);

app.use(function(req, res, next) {
    req.App = app;
    next();
});

module.exports = app;