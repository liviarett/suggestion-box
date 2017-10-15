app.controller('PostController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	$scope.post = suggestions.posts[$routeParams.id];
	
	$scope.addComment = function(comment) {
		post.comments.push({
			body: comment,
			upvotes: 0
		})
	}
	
	$scope.upVote = function(comment) {		comment.upvotes = comment.upvotes + 1;
		return;
	};
}]);