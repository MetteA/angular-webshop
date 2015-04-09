(function(){
	"use strict";

	angular
		.module("Main.checkout", [])
		.controller("checkoutController", checkoutController);

	function checkoutController($scope, $rootScope, checkoutService){

		$scope.saveOrder= function(order){
			console.log("Order saved!")
			var order = this.order;
			var orderlines = $rootScope.cartProducts;
			checkoutService.saveOrder(order, orderlines);
		}	
	}
})();