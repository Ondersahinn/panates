let router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    status: 'API its Working',
    message: 'Welcome to Panetes  Microservice!',
  });
});


const RecordController = require('../controllers/recordController');

router
  .route('/record')
  .post(RecordController.new)
  .delete(RecordController.delete)
  .get(RecordController.searchAll)
  .put(RecordController.update);
router.route('/record/:id').get(RecordController.searchById);


module.exports = router;

