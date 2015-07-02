var express = require('express');
var router = express.Router();
var debug = require('debug')('todonanet');

/* GET home page. */
router.get('/', function(req, res) 
{
  debug("called /");
  res.render('index');
});

module.exports = router;
