'use strict';

angular.module('artistControllers',
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
      .state('jade', {
        url: '/jade',
        templateUrl: 'partials/jade.html',
        controller: 'MainCtrl'
      })
      .state('list', {
	    url: '/list',
		templateUrl: 'partials/list.html',
		controller: 'ListController'
		})
		.state('details', {
		url: '/details/:itemId', 
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
		})

    $urlRouterProvider.otherwise('/');
  })
;
