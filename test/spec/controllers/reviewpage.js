'use strict';

describe('Controller: ReviewpageCtrl', function () {

  // load the controller's module
  beforeEach(module('courseReviewApp'));

  var ReviewpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReviewpageCtrl = $controller('ReviewpageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReviewpageCtrl.awesomeThings.length).toBe(3);
  });
});
