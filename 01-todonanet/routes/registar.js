	var express = require('express');
	var router = express.Router();
	var pg = require('pg');

	var conString = "postgres://postgres:2Lovelove@localhost/postgres";
	var client = new pg.Client(conString);

	/* GET  */
	router.get('/', function(req, res) {
	//res.status(200).type("application/json").send(JSON.stringify(getStandings()));

	res.render('registar',{Logout:"logout"});
	
	});

	
	/*POST*/
	router.post('/',function(req, res) {

	var userEmail = req.body.email;
	var userPassword = req.body.password;
	
	client.connect(function(err) {
   if(err)  return console.error('could not connect to postgres', err);
      
   client.query("INSERT INTO utilizador(email, password) values($1, $2)", [userEmail, userPassword]);

})

	res.redirect('/');//implementar  pagina logada
});
	module.exports = router;


