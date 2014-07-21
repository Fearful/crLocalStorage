'use strict';


// Declare app level module which depends on filters, and services
angular.module('localStorage', [
  'ngRoute',
  'localStorage.filters',
  'localStorage.LocalStorageModule',
  'localStorage.directives',
  'localStorage.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
