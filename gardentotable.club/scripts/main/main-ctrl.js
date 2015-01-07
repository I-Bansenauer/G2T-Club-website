'use strict';

var artistControllers = angular.module('artistControllers');

artistControllers
  .controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];

    $scope.spinner = {
      speed: 55
    };
    $scope.rotateY = new Transitionable(0);

    //run function on every tick of the Famo.us engine
    Timer.every(function(){
      var adjustedSpeed = parseFloat($scope.spinner.speed) / 1200;
      $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
    }, 1);

  });

artistControllers.controller ('ListController', ['$scope', '$http', function ($scope, $http) {
 $http.get('http://app.gardentotable.club/persons/').success(function(data){ 
 	$scope.persons = data.persons;
 	});
 $scope.myGridLayoutOptions = {
      dimensions: [3, 2]
    };
}]);

artistControllers.controller ('DetailsController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams ) {
	$http.get('scripts/main/data.json').success(function(data){ 
	 	$scope.artist = data[$stateParams.itemId];

	 	if ($stateParams.itemId > 0) {
	  		$scope.prevItem = Number($stateParams.itemId) - 1;
			
	 	}
	 	else{
	 		$scope.prevItem = data.length-1;
	 	}
	 	if ($stateParams.itemId == data.length-1){
	 		$scope.nextItem = 0;
	 	}
	 	else{
	 		$scope.nextItem = Number($stateParams.itemId)+1;
	 	}
 	});
}]);