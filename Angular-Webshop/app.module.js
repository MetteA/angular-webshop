(function() {
	"use strict";

	angular
		.module("Main", [
			'ngRoute',
			"Main.products",
			"Main.product", 
			"Main.cart",
			"Main.checkout"
			]
		)

		// bruger .run metoden til at indsæt rootscrope'et
		.run(function($rootScope){
			$rootScope.cartProducts = {};
			$rootScope.cartTotal = 0;
		})

		//URL route
		.config(function($routeProvider){
			$routeProvider
				.when('/checkout',{
					templateUrl: './checkout/checkout.html',
					controller: 'checkoutController'
				})
				.when('/product/:id',{
					templateUrl: './products/product.html',
					controller: 'productController'
				})
				.when("/", {
					templateUrl: './products/products.html',
					controller: 'productsController'
				})
				.otherwise ({ redirectTo: '/'});
		});
}());