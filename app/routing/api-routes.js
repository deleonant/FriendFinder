var friends = require('../data/friends.js');
var path = require('path');


module.exports = function(app) {

// More Routes
// =============================================================

app.get('/api/friends', function(req, res){
	// res info to from friends.js
	res.sendFile(path.join(__dirname + '/friends.js.'));
});

app.post('/api/friends', function(req, res) {

	var body = req.body;

	var totalScore = 100;
	var friendIndex = 0;

	// loop through friends
	for (var i = 0; i < friends.length; i++) {

		var diff = compare(friends[i].scores, body.scores)

		if (i == 0) {
			totalScore = i;
			friendIndex = diff;
		} if (diff < totalScore) {
			friendIndex = i;
			totalScore = diff;
		}

	}
	res.json(friends[friendIndex]);
});

	function compare(oldNames, newNames){
		var difference = 0;

		for (var i = 0 ; i < oldNames.length; i++) {

			difference += Math.abs(oldName[i] - newNames[i])

		}
		return difference;
	}
}