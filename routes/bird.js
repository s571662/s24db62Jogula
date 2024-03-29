var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bird', { title: 'Searching results for bird' });
});

module.exports = router;
