var express = require('express');
var router = express.Router();

var Workorder = require('./../models/workorder');

//workorders
router.get('/', function(req, res) {
	Workorder.find({}).exec(function(err, workorders) {
		if (err) {
			console.log("db error in GET /workorders: " + err);
			res.render('500');
		} else {
			res.render('workorders/index', {workorders: workorders});
		}
	});
});

router.get('/new', function(req, res) {
	var workorder = new Workorder();
	res.render('workorders/new', {workorder: workorder});

});

router.post('/', function(req, res, next) {
	req.body.author = 1;
	Workorder.create( req.body, function(err, workorder) {
		if (err) {
			console.log('db cant create post', err);
			next(500);
		} else {
			res.redirect('/workorders/' + workorder.id)
		}
	});
});

router.get('/:id', function(req, res) {
	Workorder.findById(req.params.id).exec(function(err, workorder) {
		if (err) {
			console.log("db error in GET /workorders: " + err);
			res.render(500);
		} else if (!workorder) {
			res.render('404');
		} else {
			res.render('workorders/show', {workorder: workorder});
		}
	});
});

module.exports = router;