(function(){
	"use strict";

	var cartService = function($http, $rootScope){

		var addProductToCart = function(product, quantity){
			$rootScope.cartProducts[product.name] = {
				product: product,
				quantity: quantity
			}
		}

		return{
			addProductToCart: addProductToCart
		}
	}

	angular
		.module("Main")
		.factory("cartService", cartService);
}());