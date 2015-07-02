var express = require('express');
var router = express.Router();

var pg = require('pg');

var conString = "postgres://postgres:2Lovelove@localhost/postgres";
var client = new pg.Client(conString);

var passport = require('passport') , 
LocalStrategy = require('passport-local').Strategy;


/*
passport.use(new LocalStrategy({
    // set the field name here
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    /* get the username and password from the input arguments of the function */

    // query the user from the database

/*
 var query = client.query('SELECT email, password FROM "utilizador" where email=\''+username+'\'', function (err, result){
	console.log(result);

	 var utilizador = {username:result.rows[0].name , passwrd:result.rows[0].password} ;
	 if(result!=null && result.rows[0].pp=== password) return done(null, user);
	
	//if(password === result.rows[0].password){return fn(null, 10)}
	
	 return done(err);
});
*/
 
/*

    User.find( { where: {username: username}} )
      .success(function(user){
      
        if(!user)
          // if the user is not exist
          return done(null, false, {message: "The user is not exist"});
        else if(!hashing.compare(password, user.password))
          // if password does not match
          return done(null, false, {message: "Wrong password"});
        else
          // if everything is OK, return null as the error
          // and the authenticated user
          return done(null, user);
        
      })
      .error(function(err){
        // if command executed with error
        return done(err);
      });
  }
));

*/


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // query the current user from database
  User.find(id)
    .success(function(user){
        done(null, user);
    }).error(function(err){
        done(new Error('User ' + id + ' does not exist'));
    });
});


/* GET users listing. */
router.get('/', function(req, res) {
   
 res.render('login', { title: 'TodoNaNet' });
 });

module.exports = router;

/*
router.post('/', loginPost);

function loginPost(req, res, next) {
  // ask passport to authenticate
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      // if error happens
      return next(err);
    }
    
    if (!user) {
      // if authentication fail, get the error message that we set
      // from previous (info.message) step, assign it into to
      // req.session and redirect to the login page again to display
      req.session.messages = info.message;
      return res.redirect('/login');
    }

    // if everything's OK
    req.logIn(user, function(err) {
      if (err) {
   //     req.session.messages = "Error";
        return next(err);
      }

      // set the message
    //  req.session.messages = "Login successfully";
      return res.redirect('/');
    });
    
  })(req, res, next);
}
*/


router.post('/',
  function(req, res) {
              
     var username = req.body.username;
     var password = req.body.password;

 var query = client.query('SELECT * FROM "Utilizador" where name=\''+username+'\'', function (err, result){
	console.log(result);

	 var utilizador = {username:result.rows[0].name , passwrd:result.rows[0].password} ;
	 if(result!=null && result.rows[0].pp=== password) return fn(null, 10);
	
	//if(password === result.rows[0].password){return fn(null, 10)}
	
	 return fn(null, null);
});





 if (!username || !password) { res.redirect('/login');}
    if(username == 'jurandy' && password == 'lol')   res.redirect('/'); // fazer a pag logada
    else res.redirect('/login'); //voltar a fazer login
   
  });



