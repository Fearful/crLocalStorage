'use strict';

/* jasmine specs for services go here */

describe('localStorageModule tests', function () {
    var localStorageService;
    beforeEach(function () {
        module('localStorage');
        inject(function(_localStorageService_) {
	      localStorageService = _localStorageService_;
	    });
    });
    it('should have a getPrefix function', function () { 
		expect(angular.isFunction(localStorageService.getPrefix));
	});
    it('should have an set function', function () { 
		expect(angular.isFunction(localStorageService.set));
	});
    it('should have an get function', function () { 
		expect(angular.isFunction(localStorageService.get));
	});
    it('should have an remove function', function () { 
		expect(angular.isFunction(localStorageService.remove));
	});
});
