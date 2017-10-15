app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
	$scope.posts = suggestions.posts;
	$scope.addSuggestion = function() {
		//if input empty, don't submit
		if(!$scope.title || $scope.title === "") {
			return;
		} 
		console.log($scope.title);
		//push suggestion posts in suggestions.js
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
			comments: []
		});
		//after submit, clear input
		$scope.title = "";
		console.log($scope.posts);
	};
}]);