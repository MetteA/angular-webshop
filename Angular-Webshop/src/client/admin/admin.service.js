(function(){
	"use strict";

	var adminService = function($http, $rootScope){

		var addProduct = function(product){
			$http.post("/api/product/", {
				'name': product.name,
				'price': product.price,
				'image': product.image,
				'category': product.category,
				'description': product.description
			})
			.success(function(response){
				console.log(response)
			})
			.error(function(response){
				console.log(response)
			})
		}

		var updateProduct = function(id, product){
			$http.put("/api/product/" + id, {
				'name': product.name,
				'price': product.price,
				'image': product.image,
				'category': product.category,
				'description': product.description
			})
			.success(function(){
				console.log('Product updatet');
			});
		}

		var deleteProduct = function(id){
			console.log(id);
			return $http.delete("/api/product/" + id)
						.then(function(response){
							return response;
						});
		}

		return {
			addProduct: addProduct,
			updateProduct: updateProduct,
			deleteProduct: deleteProduct
		}
	}

	angular
		.module("Main")
		.factory("adminService", adminService);
}());