'use strict';

/* App Module */

var roshreview = angular.module('roshreview', [
  'ngRoute',
  'roshreviewControllers'
]);

roshreview.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);
