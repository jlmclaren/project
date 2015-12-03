var mongoose = require('mongoose');

var schema = mongoose.Schema({
	name: String,
	employeeId: String,
	jobSite: {
		name: String,
		location: String,
		telephone: String,
		email: String

	},
	serviceOrder: {
		product: String,
		make: String,
		model: String,
		serial: String,
		summary: String
	},
	parts: {
		quantity: Number,
		description: String,
		cost: String
	},
	labor: {
		date: String,
		laborType: String,
		summary: String,
		hours: String,
		price: String
	},
	comments: String

});

var Workorder = mongoose.model('workorders', schema);
module.exports = Workorder;