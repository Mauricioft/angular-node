'use strict';

var controller = require('./controllers/MainController');

module.exports = function(app){
	// Definimos la ruta principal
	app.get('/', function(req, res){
		res.render('index');
	});
}