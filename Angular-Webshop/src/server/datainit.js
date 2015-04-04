var mongoose = require("mongoose"),
	dbName = "lamps4ligth";

// var Category = mongoose.model("Category", {
// 	category: String
// })

var Product = mongoose.model("Product", {
	name: String,
	price: Number,
	image: String,
	category: String,
	description: String
});

mongoose.connect("mongodb://localhost/" + dbName);

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);


// function insertCategories(){
// 	Category.create(
// 		{
// 			"category": "Ceiling Lamp"
// 		},
// 		{
// 			"category": "Table lamp"
// 		},
// 		{
// 			"category": "Floor lamp"
// 		}
// 	);
// }

function deleteProducts() {
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts();
	});
}

function insertProducts(){
	Product.create(
		{
			"name": "Normann Cph - Norm69",
			"price": 650.00,
			"image": "img/1.jpg",
			"category": "Ceiling Lamp",
			"description": "A by now classic lamp from Normann Copenhagen. The lamp Norm 69 is available in several sizes. Beautiful lamp, giving a good light and is very useful in all rooms of the home. Note that no supplied cord and socket. The light comes into a flat box and must be assembled."
		},
		{
			"name": "Illumin Drip/Drop",
			"price": 999.00 ,
			"image": "img/2.jpg",
			"category": "Ceiling Lamp",
			"description": "Illumin Drip Drop is a beautiful pendant that gives a very pleasant light. You can shape your lamp according to your taste and give it exactly the terms that suit you. Illumin Drip Drop is a modern lamp that inspires and creates joy and can be changed as often as you want."
		},
		{
			"name": "Flowerpot ",
			"price": 1695.00,
			"image": "img/3.jpg",
			"category": "Table lamp",
			"description": "Flowerpot table lamps are available in 2 versions - VP3 and VP4 and are available in many different colors - colors change with the different trends. With the lamp's simple elegant design goes this beautiful table lamp never out of fashion."
		},
		{
			"name": "House Doctor - Game",
			"price": 1650.00,
			"image": "img/4.jpg",
			"category": "Table lamp",
			"description": "Use the Game table lamp in the office or wherever you want extra light. Dimensions: 50 cm high. Awesome lamp for awesome people!"
		},
		{
			"name": "And Tradition Bellevue",
			"price": 3995.00,
			"image": "img/5.jpg",
			"category": "Floor lamp",
			"description": "This elegant floor lamp is designed by Arne Jacobsen. He designed the Bellevue lamp series back in 1929, as he føste lamp. So Bellevue lamp has been involved from the very beginning of Arne Jacobsen's start as arkitekt.Lampen is quite simple and has a very flexible neck, which makes the light can be directed in the direction you want. AJ2 floor lamp is made of lacquered aluminum and steel."
		}
	);
}