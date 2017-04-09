'use strict';

/**
 * @ngdoc function
 * @name courseReviewApp.controller:ReviewpageCtrl
 * @description
 * # ReviewpageCtrl
 * Controller of the courseReviewApp
 */
angular.module('courseReviewApp')
  .controller('ReviewpageCtrl', function($rootScope, $scope, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    this.lol = 2;
    vm.message = '';
    vm.someClickHandler = someClickHandler;
    vm.dtOptions = DTOptionsBuilder.fromSource('views/data.json')
        .withPaginationType('full_numbers')
        .withDisplayLength(10)
        .withDOM('lfrtip')
        .withOption('rowCallback', rowCallback);
    vm.dtColumns = [
        DTColumnBuilder.newColumn('number').withTitle('Course Number').renderWith(renderCourseNumber),
        DTColumnBuilder.newColumn('name').withTitle('Course Name'),
        DTColumnBuilder.newColumn('prof').withTitle('Professor')
    ];

    //function to execute after click
    function someClickHandler(info) {
        vm.courseData = info;
    }

    function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', nRow).unbind('click');
        $('td', nRow).bind('click', function() {
            $scope.$apply(function() {
                vm.someClickHandler(aData);
                // function to execute after click
            });
        });
        return nRow;
    }

    function renderCourseNumber(data, type, row, meta) {
    	return row.dept_id + row.number;
	}

  });
