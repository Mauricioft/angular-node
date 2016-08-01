'use strict';

angular.module('chat.MainService', [])

.factory('MainSrvc', ['$http', function(http){
	return{
		toWrite: function(){
			return http.post('/edit/event', params).then(function (response) {
                return response.data;
            });
		}
	}
}]);