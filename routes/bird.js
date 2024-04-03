var express = require('express');
const bird_controlers= require('../controllers/bird');
var router = express.Router();
/* GET birds */
router.get('/', bird_controlers.bird_view_all_Page );
module.exports = router;
