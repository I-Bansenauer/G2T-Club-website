'use strict';

var menuControllers = angular.module('menuControllers');

menuControllers
  .controller('MainCtrl', function ($scope, $famous) {
    var Timer = $famous['famous/utilities/Timer'];
	var Transitionable = $famous['famous/transitions/Transitionable'];


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

menuControllers.controller ('CardController', ['$scope', '$http', '$famous', function ($scope, $http, $famous) {
	var Transitionable = $famous['famous/transitions/Transitionable'];
	$scope.cardDeck = [];
	$scope.growDeck = [];
 
 $http.get('http://app.gardentotable.club/menuCards/').success(function(data){ 
 	 $scope.menuCards = data.menuCards;
 	  for( var i = 0; i<data.menuCards.length;i++)
 	  {
	 	  $scope.cardDeck[i] = new Transitionable(0);
	 	  $scope.growDeck[i] = new Transitionable([undefined, 200]);
 	  }
 	}); 
 
 $scope.animateFlip = function(cardNum) {
	$scope.cardDeck[cardNum].set(Math.PI, {
	  duration: 800,
	  curve: 'easeInOut'
	});
 };
 $scope.animateGrow = function(cardNum){
	 $scope.growDeck[cardNum].set([undefined, 300], {
	  duration: 800,
	  curve: 'easeInOut'
	},$scope.animateFlip(cardNum));
 };
 $scope.myGridLayoutOptions = {
      dimensions: [3, 2]
    }; 
 $scope.parseDate = function(dateString){
	 return longDateS(dateString);
 	};
}]);

menuControllers.controller ('MenuController', ['$scope', '$http', function ($scope, $http) {
 $http.get('http://app.gardentotable.club/menuDishes/' + $scope.card.menuID).success(function(data){ 
 	$scope.menuDishes = data.menuDishes;
 	});
}]);

menuControllers.controller ('MealSlotsController', ['$scope', '$http', function ($scope, $http) {
 $http.get('http://app.gardentotable.club/mealSlots/' + $scope.card.mealID).success(function(data){ 
 	$scope.mealSlots = data.mealSlots;
 	});
}]);

menuControllers.controller ('DetailsController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams ) {
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