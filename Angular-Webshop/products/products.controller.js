(function(){
	"use strict";

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($scope, productsService, cartService){
		
		var modelProducts = function(data){
			$scope.products = data;
		}

		var modelCategories = function(data){
			$scope.categories = data;
		}

		$scope.addToCart = function(product){
			var quantity = this.quantity;
			cartService.addProductToCart(product, quantity);
		}


		var updateCategoriesSelected = function(){
			$scope.categoriesSelected = productsService.getCategoriesSelected();
		}

		$scope.categoryChange = function(category){
			productsService.categoryChange(category);
			updateCategoriesSelected();
		}

		$scope.categoryFilter = function(product){
			return productsService.categoryFilter(product);
		}

		productsService.getProducts()
			.then(modelProducts);

		productsService.getCategories()
			.then(modelCategories);
	}
})();