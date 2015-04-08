var mongoose = require('mongoose');

var schema = {
	name: String,
	price: Number,
	image: String,
	category: String,
	description: String
}

var Orders = mongoose.model("Orders", schema);

module.exports = Orders;


// Mangler meget!