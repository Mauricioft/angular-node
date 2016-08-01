'use strict';

angular.module('chat.MainControllers', [])

.controller('MainCtrl', ['$scope', 'MainSrvc', 'CONSTANTS',  function(scope, MainSrvc, CONSTANTS){
	
	scope.twittear = [];
	scope.objResponse = [];

	// abrimos la conexion
  	var socket = io.connect(CONSTANTS.BASE_URL_SOCKET);

  	socket.on('news', function(data){
  		console.log(data);
    	socket.emit('my other event', { my: 'data' });
  	});

	scope.toWrite = function(){
		MainSrvc.toWrite().then(function(response){
			scope.objResponse.push(response);
			console.log('MainSrvc.toWrite.then', response);
		});
	}
}]);