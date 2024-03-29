var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('randomitem', { title: 'Given random item ' });
});

module.exports = router;
