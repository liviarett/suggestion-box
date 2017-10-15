var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
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
}]);

