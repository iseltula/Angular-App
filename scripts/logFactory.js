EmpApp
	.factory('logFactory', function($http){
	

	var samples = $http.get('data/data.json').success(function(response) {
        return response;
    });

    var factory = {};
    factory.getUsers = function() {
        return samples;
    };
	
    return factory;
});