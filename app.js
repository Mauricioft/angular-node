'use strict';

var express = require('express');
var app = express();
var server= require('http').createServer(app);
var path = require('path');
var router = require('./app/http/routes.js');
var io = require('socket.io').listen(server);
var connections = 0;

router(app); 

// carga de ficheros estaticos
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'resource/views'));
app.set('view engine', 'ejs');
app.use('/lib', express.static('public/app/js/front')); 
app.use('/components', express.static('public/app/tpls/front')); 

// Escuchamos conexiones entrantes
io.sockets.on('connection', function (socket) {
  connections++;
  console.log('connected', connections);
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  /*
  socket.broadcast.emit('connections', {connections:connections});

  // Detectamos eventos de mouse
  socket.on('mousemove', function (data) {
    // transmitimos el movimiento a todos los clientes conectados
    socket.broadcast.emit('move', data);
  });

  socket.on('disconnect', function() {
    connections--;
    console.log('connected', connections);
    socket.broadcast.emit('connections', {connections:connections});
  });
  */
});


// Decimos en que puerto queremos escuchar (el 8000)
server.listen(app.get('port'), function () {
  console.log("Escuchando en el puerto " + app.get('port'));
});