var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	})
	.when('/:id', {
		controller: 'PostController',
		templateUrl: 'views/post.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});