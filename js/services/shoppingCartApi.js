angular.module("shoppingCart").factory("productsAPI", function($http){

	var _getProducts = function(){
		return $http.get("http://localhost:3412/product");
	};
	return {
		getProducts: _getProducts
	};

});