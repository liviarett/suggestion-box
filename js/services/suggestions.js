app.service('suggestions', function() {
    var suggestions = {
        posts: [{
            title: 'Free pizza at club meetings',
            upvotes: 8,
            comments: [{
				body: 'Love the idea!',
				upvotes: 9
			}, {
				body: 'Maybe we should have a healthier option?',
				upvotes: 1
			}],
            id: 0
        }, {
            title: 'End all club emails with Laffy Taffy jokes',
            upvotes: 9,
            comments: [{
				body: 'That would be funny!',
				upvotes: 5
			}],
            id: 1
        }, {
            title: 'Retrofit water fountain with Gatorade',
            upvotes: 7,
            comments: [{
				body: 'That\'s the most ridiculous idea I have ever heard',
				upvotes: 7
			}, {
				body: 'This is meant to be a serious discussion!',
				upvotes: 2
			}],
            id: 2
        }, {
            title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
            upvotes: 3,
            comments: [{
				body: 'haha great',
				upvotes: 0
			}],
            id: 3
        }]
    };
    return suggestions;
});
