'use strict';

function regards(req, res){
	// Obtenemos el nombre (no necesitamos el modulo url!)
  	// http://localhost:8000/hi?name=node
	var name = req.query.name;
	res.send('<h1>Hi, ' + salute.greeting(name) + '</h1>');
}

function goodbyes(req, res){
	var name = req.query.name;
	res.send('<h1>Bye, ' + salute.greeting(name) + '</h1>');
}

module.exports = {
	greeting: regards,
	farewell: goodbyes
};