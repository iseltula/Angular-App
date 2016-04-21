var EmpApp= angular.module('ngLogs', ['ngRoute']);

EmpApp.config(function($routeProvider){
	
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'logController'
	})
});