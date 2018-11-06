var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/transactions/:id', function(req, res, next) {
  res.render('transaction', { id: req.params.id });
});


module.exports = router;
