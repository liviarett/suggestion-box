app.controller('PostController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	$scope.post = suggestions.posts[$routeParams.id];
	
	$scope.addComment = function() {
		if(!$scope.body || $scope.body === "") {
return;
		}
		$scope.post.comments.push({
			body: $scope.body,
			upvotes: 0
		});
		//after submit, clear input
		$scope.body = "";
	}
	
	$scope.upVote = function(comment) {		comment.upvotes = comment.upvotes + 1;
		return;
	};
}]);