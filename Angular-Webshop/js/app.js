(function(){
	"use strict";

	angular
		.module("Main", []) //De firkantet partenser bruges til at fortælle hvilke andre modeller, som modellen er afhæning af
		.controller("MainController", MainController); //name function

	function MainController($scope, $http){ //Dependency Injection
		
		$scope.categoriesSelected = new Array();

		var getProducts = function(response){
			$scope.products = response.data;
		}

		var getCategories = function(response){
			$scope.categories = response.data;
		}

		var getError = function(reason){
			$scope.error = "Der er sket en fejl";
		}

		$scope.categoryChange = function(category){
			var i = $scope.categoriesSelected.indexOf(category);
			if(i > -1){
				$scope.categoriesSelected.splice(i, 1);
			}
			else{
				$scope.categoriesSelected.push(category);
			}
		}

		$scope.categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

		$http.get("data/products.json")
			.then(getProducts, getError);

		$http.get("data/categories.json")
			.then(getCategories, getError);


	}

})(); //De sidste parenteterse gør at funktionen køres når siden er loadet
