angular.module("shoppingCart").controller("shoppingCartCtrl", function($scope, productsAPI){

		$scope.message = "Shopping Cart Example";
		$scope.basket = "Basket";
		$scope.productlist = "Product List";

		var loadProducts = function(){
			productsAPI.getProducts().success(function(data){
				$scope.products = data;
			}).error(function(data, status){
				$scope.message = "Something wrong:" + data;
			})
		}
		loadProducts();

		$scope.buy = function(id){
			alert(id);
		}

});