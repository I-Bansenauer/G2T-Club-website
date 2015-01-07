
artistControllers.controller ('ListController', ['$scope', '$http', function ($scope, $http) {
 $http.get('http://app.gardentotable.club/persons/').success(function(data){ 
 	$scope.persons = data.persons;
 	});
}]);

artistControllers.controller ('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams ) {
	$http.get('js/data.json').success(function(data){ 
	 	$scope.artist = data[$routeParams.itemId];

	 	if ($routeParams.itemId > 0) {
	  		$scope.prevItem = Number($routeParams.itemId) - 1;
			
	 	}
	 	else{
	 		$scope.prevItem = data.length-1;
	 	}
	 	if ($routeParams.itemId == data.length-1){
	 		$scope.nextItem = 0;
	 	}
	 	else{
	 		$scope.nextItem = Number($routeParams.itemId)+1;
	 	}
 	});
}]);