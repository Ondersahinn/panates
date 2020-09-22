let router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    status: 'API its Working',
    message: 'Welcome to SocialBlog ARTICLE Microservice!'
  });
});

var RecordController = require('./controllers/recordController');

router
  .route('/article')
  .get(RecordController.searchAll)
  .post(RecordController.new);
router
  .route('/article/:id')
  .delete(RecordController.delete)
  .put(RecordController.update)
  .get(RecordController.searchById);

module.exports = router;
