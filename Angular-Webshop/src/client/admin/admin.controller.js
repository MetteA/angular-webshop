(function(){
	"use strict";

	angular
		.module("Main.admin", [])
		.controller("adminController", adminController);

		function adminController($scope, $routeParams, adminService, productsService){
			
			var modelProducts = function(data){
				$scope.products = data;
			}	

			var modelProduct = function(productArray){
				$scope.product = productArray[0];
			}

			$scope.addProduct= function(product){
				console.log("Added!")
				var product = this.product;
				adminService.addProduct(product)
			}	

			$scope.updateProduct = function(id){
				console.log("Update")
				var product = this.product;
				adminService.updateProduct(id, product);
			}

			$scope.deleteProduct = function(id){
				console.log("Delete!")
				adminService.deleteProduct(id)
				.then(productsService.getProducts()
						.then(modelProducts))
			}



			productsService.getProducts()
			.then(modelProducts);

			productsService.getProduct($routeParams.id)
				.then(modelProduct);
		}
})();