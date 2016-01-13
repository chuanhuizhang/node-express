var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:tid', function(req, res, next) {
	var table_id = req.param('tid');
	res.render('customer', { title: 'Edian', table:  table_id});
});

module.exports = router;
