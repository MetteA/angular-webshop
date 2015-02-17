(function(){
	"use strict";

	// Bruger Revealing Module Pattern
	var productsService = function($http, $rootScope){
		
		var getProducts = function(){
			return $http.get("data/products.json")
						.then(function(response){
							return response.data;
						}, getError)
		}

		var getCategories = function(){
			return $http.get("data/categories.json")
						.then(function(response){
							return response.data;
						})
		}

		var getError = function(reason){
			$rootScope.error = "Der er sket en fejl";
		}

		//API..
		return {
			getProducts: getProducts,
			getCategories: getCategories
		}
	}

	angular
		.module("Main")
		//bruger factory til at registerer denne service
		.factory("productsService", productsService);
}());