var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bird_controller = require('../controllers/bird');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bird ROUTES ///
// POST request for creating a bird.
router.post('/bird', bird_controller.bird_create_post);
// DELETE request to delete bird.
router.delete('/bird/:id', bird_controller.bird_delete);
// PUT request to update bird.
router.put('/bird/:id', bird_controller.bird_update_put);
// GET request for one bird.
router.get('/bird/:id', bird_controller.bird_detail);
// GET request for list of all bird items.
router.get('/bird', bird_controller.bird_list);
module.exports = router;
