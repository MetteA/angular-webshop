(function() {
	"use strict";

	angular
		.module("Main", [
			'ngRoute',
			"Main.products",
			"Main.product", 
			"Main.cart"
			]
		)

		// bruger .run metoden til at indsæt rootscrope'et
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		})

		//URL route
		.config(function($routeProvider){
			$routeProvider
				.when('/product/:id',{
					templateUrl: './products/product.html',
					controller: 'productController'
				})
				.when("/", {
					templateUrl: './products/products.html',
					controller: 'productsController'
				})
				.otherwise ({ redirectTo: '/'});
		})
}());