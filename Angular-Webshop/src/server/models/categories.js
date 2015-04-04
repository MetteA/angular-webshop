var mongoose = require('mongoose');

var schema = {
	category: String
}

var Categories = mongoose.model("Categories", schema);

module.exports = Categories;