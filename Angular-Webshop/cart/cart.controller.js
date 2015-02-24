(function(){
	"use strict";

	function cartController($scope, cartService){
		
		$scope.deleteProductFromCart = function(product){
			cartService.deleteProductFromCart(product);
		}

		$scope.addToQuantity = function(product){
			cartService.addToQuantity(product);
		}

		$scope.deleteFromQuantity = function(product){
			cartService.deleteFromQuantity(product);
		}
	}

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);
	
}());