'use strict';

/**
 * @ngdoc overview
 * @name courseReviewApp
 * @description
 * # courseReviewApp
 *
 * Main module of the application.
 */
angular
  .module('courseReviewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datatables'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/reviewPage', {
        templateUrl: 'views/reviewpage.html',
        controller: 'ReviewpageCtrl',
        controllerAs: 'reviewPage'
      })
      .when('/writeReview', {
        templateUrl: 'views/writereview.html',
        controller: 'WritereviewCtrl',
        controllerAs: 'writeReview'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
