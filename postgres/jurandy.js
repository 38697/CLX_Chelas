var http = require('http');
var pg = require('pg');

var conString = "postgres://postgres:2Lovelove@localhost/postgres";
//var conString = "postgres://username:password@localhost/database";
var server = http.createServer(function(req, res) {
    console.log("Request for " +  req.url);
    // get a pg client from the connection pool
    pg.connect(conString, function(err, client, done) {
    // record the visit
    

    //client.query('INSERT INTO test(id, name)VALUES values($1, $2)', ['Tinniam', 'Ganesh']);
//client.query('INSERT INTO test(id, name)VALUES values($1, $2)', [lol, apagar]);
client.query("INSERT INTO test(id, name)VALUES values(12,'Trovoada')");


      function processInsert(err, result) {

      // handle an error from the query
      if(handleError(err)) return;

      // get the total number of visits today (including the current visit)
    }
    
  
      
      var handleError = function(err) {
          // no error occurred, continue with the request
          if(!err) return false;

          // An error occurred, remove the client from the connection pool.
          // A truthy value passed to done will remove the connection from the pool
          // instead of simply returning it to be reused.
          // In this case, if we have successfully received a client (truthy)
          // then it will be removed from the pool.
          done(client);
          res.writeHead(500, {'content-type': 'text/plain'});
          res.end('An error occurred');
          return true;
        };
  });
  
  

})

server.listen(3001)