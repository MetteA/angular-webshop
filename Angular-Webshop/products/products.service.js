(function(){
	"use strict";

	// Bruger Revealing Module Pattern
	var productsService = function($http, $rootScope){
		
		var categoriesSelected = [];

		var getProducts = function(){
			return $http.get("data/products.json")
						.then(function(response){
							return response.data;
						}, getError)
		}

		var getProduct = function(id){
			return $http.get("data/products.json")
						.then(function(response){
							return findProductInArray(response.data, id);
						}, getError)
		}

		var findProductInArray = function(data,id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			})
		}

		var getCategories = function(){
			return $http.get("data/categories.json")
						.then(function(response){
							return response.data;
						}, getError)
		}

		var getError = function(reason){
			$rootScope.error = "Der er sket en fejl";
		}

		var getCategoriesSelected = function(){
			return getCategoriesSelected;
		}

		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
			if(i > -1){
				categoriesSelected.splice(i, 1);
			}
			else{
				categoriesSelected.push(category);
			}
		}

		var categoryFilter = function(product){
			if(categoriesSelected.length > 0){
				if(categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

		//API..
		return {
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories,
			categoryFilter: categoryFilter,
			categoryChange: categoryChange,
			getCategoriesSelected: getCategoriesSelected
		}
	}

	angular
		.module("Main")
		//bruger factory til at registerer denne service
		.factory("productsService", productsService);
}());