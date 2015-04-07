(function(){
	"use strict";

	var adminService = function($http, $rootScope){

		var updateProduct = function(id, product){
			$http.put("/api/product/" + id, {
				'name': product.name,
				'price': product.price,
				'image': product.image,
				'category': product.category,
				'description': product.description
			})
			.success(function(){
				console.log('AWESOME');
			});

			// return $http.put("/api/product/" + id)
			// 			.then(function(response){
			// 				return response;
			// 			});
		}

		var deleteProduct = function(id){
			console.log(id)
			return $http.delete("/api/product/" + id)
						.then(function(response){
							return response;
						});
		}

		return {
			updateProduct: updateProduct,
			deleteProduct: deleteProduct
		}
	}

	angular
		.module("Main")
		.factory("adminService", adminService);
}());