var mongoose = require('mongoose');

var schema = {
	name: String,
	price: Number,
	image: String,
	category: String,
	description: String
}

var Products = mongoose.model("Products", schema);

module.exports = Products;