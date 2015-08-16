var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/wat', function(req, res, next) {
  res.render('spare', { title: 'Spare Change' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Spare Change' });
});

/*GET home page*/
router.get('/', function(req, res) {
    res.render('spare', { title: 'Spare Change' });
});

module.exports = router;
