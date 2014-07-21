'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('localStorage.controllers'));
  it('should ....', inject(function($controller) {
    //spec body
    var localStorageController = $controller('localStorageController', { $scope: {} });
    expect(localStorageController).toBeDefined();
  }));
});