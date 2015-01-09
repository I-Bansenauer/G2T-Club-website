'use strict';

angular.module('menuControllers',
  ['ngAnimate', 'ngCookies',
    'ngTouch', 'ngSanitize',
    'ngResource', 'ui.router',
    'famous.angular' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
       .state('menu', {
	    url: '/menu',
		templateUrl: 'partials/menu.html',
		controller: 'CardController'
		})
		.state('details', {
		url: '/details/:itemId', 
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
		})

    $urlRouterProvider.otherwise('/');
  })
;
