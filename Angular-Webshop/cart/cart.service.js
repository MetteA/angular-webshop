(function(){
	"use strict";

	var cartService = function($http, $rootScope){

		var addProductToCart = function(product, quantity){
			if($rootScope.cartProducts[product.name]){
				$rootScope.cartProducts[product.name].quantity += quantity;
			}
			else{
				$rootScope.cartProducts[product.name] = {
					product: product,
					quantity: quantity,
					total: quantity * product.price
				}
			}	

			calcCartTotal(quantity * product.price);
		}

		var deleteProductFromCart = function(product){
			var cartProduct = $rootScope.cartProducts[product.name];
			var cartProductTotal = cartProduct.product.price * cartProduct.quantity;
			calcCartTotal(cartProductTotal * -1);
			delete $rootScope.cartProducts[product.name];
			
			console.log("slettet");
		}

		var addToQuantity = function(product){
			calcProductTotal(product, 1);
			calcCartTotal(product.price);
			console.log("+1");
		}

		var deleteFromQuantity = function(product){
			if($rootScope.cartProducts[product.name].quantity > 1){
				calcProductTotal(product, -1);
				calcCartTotal(product.price * -1);
			}

			console.log("-1");
		}

		var calcCartTotal = function(amount){
			$rootScope.cartTotal += amount;
		}

		var calcProductTotal = function(product, quantity){
			var cartProduct = $rootScope.cartProducts[product.name];
			cartProduct.quantity += quantity;
			cartProduct.total = cartProduct.quantity * cartProduct.product.price;
		}

		return{
			addProductToCart: addProductToCart,
			deleteProductFromCart: deleteProductFromCart,
			addToQuantity: addToQuantity,
			deleteFromQuantity: deleteFromQuantity
		}
	}

	angular
		.module("Main")
		.factory("cartService", cartService);
}());