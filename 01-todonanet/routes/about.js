	var express = require('express');
	var router = express.Router();
	
	/* GET home page. */
	router.get('/', function(req, res) {
	//res.status(200).type("application/json").send(JSON.stringify(getStandings()));

	res.render('about',{Logout:"logout"});//, function(err, html) {
	// res.status(200).type("application/json").send(text);
	// });
	//res.type("application/json");
	});
	/*
	var request = require('request');

	request.post( '/',{ form: { name: 'user' } },
	function (error, response, body) {
	if (!error && response.statusCode == 200) {
	console.log(body)
	}
	}
	);*/
	
	

	


	module.exports = router;


	function getStandings() {
	return [
	{ name: "SL Benfica", points: 34 , games: 13 , goals: 30},
	{ name: "FC Porto", points: 28 , games: 13 , goals: 27},
	{ name: "Vitória Guimarães", points: 28 , games: 13 , goals: 23},
	];
	};
	
	
	module.exports = router;
	
	
	function getStandings() {
	return [
	{ name: "SL Benfica", points: 34 , games: 13 , goals: 30},
	{ name: "FC Porto", points: 28 , games: 13 , goals: 27},
	{ name: "Vitória Guimarães", points: 28 , games: 13 , goals: 23},
	];
	};
	
	
	