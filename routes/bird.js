var express = require('express');
const bird_controlers= require('../controllers/bird');
var router = express.Router();
/* GET birds */
router.get('/', bird_controlers.bird_view_all_Page );
router.get('/birds/:id', bird_controlers.bird_detail);
/* GET detail bird page */
router.get('/detail', bird_controlers.bird_view_one_Page);
/* GET create bird page */
router.get('/create', bird_controlers.bird_create_Page);
/* GET create update page */
router.get('/update', bird_controlers.bird_update_Page);
/* GET delete bird page */
router.get('/delete', bird_controlers.bird_delete_Page);


module.exports = router;

