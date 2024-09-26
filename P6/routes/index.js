var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) { //belajar template engine selain ejs
  res.render('about'); //redirect ke about.ejs
});

module.exports = router;
