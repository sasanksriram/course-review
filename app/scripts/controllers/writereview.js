'use strict';

/**
 * @ngdoc function
 * @name courseReviewApp.controller:WritereviewCtrl
 * @description
 * # WritereviewCtrl
 * Controller of the courseReviewApp
 */
angular.module('courseReviewApp')
  .controller('WritereviewCtrl', function ($location) {
    var vm = this;
    vm.courseNumber = $location.search().course;
  });
