'use strict';

describe('Controller: WritereviewCtrl', function () {

  // load the controller's module
  beforeEach(module('courseReviewApp'));

  var WritereviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WritereviewCtrl = $controller('WritereviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WritereviewCtrl.awesomeThings.length).toBe(3);
  });
});
