(function() {
	"use strict";

	angular
		.module("Main", 
			["Main.products", "Main.cart"]
		)
		// bruger .run metoden til at indsæt rootscrope'et
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		}); 
}());