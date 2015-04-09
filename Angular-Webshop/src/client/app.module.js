(function() {
	"use strict";

	angular
		.module("Main", [
			'ngRoute',
			"Main.products",
			"Main.product", 
			"Main.cart",
			"Main.checkout",
			"Main.admin"
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
				.when('/admin',{
					templateUrl: './admin/admin.html',
					controller: 'adminController'
				})
				.when('/admin/update-product/:id',{
					templateUrl: './admin/updateProduct.html',
					controller: 'adminController'
				})
				.when('/admin/add-product',{
					templateUrl: './admin/addProduct.html',
					controller: 'adminController'
				})
				.when('/admin/show-orders',{
					templateUrl: './admin/showOrders.html',
					controller: 'adminController'
				})
				.when("/", {
					templateUrl: './products/products.html',
					controller: 'productsController'
				})
				.otherwise ({ redirectTo: '/'});
		});
}());