'use strict';

/* App Module */

var roshreview = angular.module('roshreview', [
  'ngRoute',
  'roshreviewControllers',
  'roshreviewServices',
  'ngCookies',
  'ngSanitize',
  'highcharts-ng'
]);

roshreview.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardCtrl'
      }).
      when('/create_exam', {
        templateUrl: 'partials/exams/new.html',
        controller: 'ExamCtrl'
      }).
      when('/exams/history/self_created', {
        templateUrl: 'partials/exams/history.html',
        controller: 'ExamHistoryCtrl',
        resolve: {
          type: function () {
            return 'self_created'
          }
        }
      }).
      when('/exams/history/assigned', {
        templateUrl: 'partials/exams/history.html',
        controller: 'ExamHistoryCtrl',
        resolve: {
          type: function () {
            return 'assigned'
          }
        }
      }).
      when('/exams/unstarted_assigned_exams', {
        templateUrl: 'partials/exams/unstarted_assigned_exams.html',
        controller: 'ExamHistoryCtrl',
        resolve: {
          type: function () {
            return 'unstarted_assigned'
          }
        }
      }).
      when('/exams/:id', {
        templateUrl: 'partials/exams/show.html',
        controller: 'ExamsQuestionCtrl'
      }).
      when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'SettingsCtrl'
      }).
      when('/performance', {
        templateUrl: 'partials/performance.html',
        controller: 'PerformanceCtrl'
      }).
      when('/term_and_conditions', {
        templateUrl: 'static_pages/term_and_condition.html'
      }).
      when('/disclaimer', {
        templateUrl: 'static_pages/disclaimer.html'
      }).
      when('/privacy_policy', {
        templateUrl: 'static_pages/privacy_policy.html'
      }).
      when('/references', {
        templateUrl: 'static_pages/references.html'
      }).
      when('/abbreviations', {
        templateUrl: 'static_pages/abbreviations.html'
      }).
      when('/contact_us', {
        templateUrl: 'static_pages/contact_us.html'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }
]);

roshreview.run(function($rootScope, $location, Routes) {
  $rootScope.$on("$routeChangeStart", function(event, next, current) {
    if (!next.templateUrl.match(/^\/static_pages\/*/)) {
      if (!$rootScope.loggedIn() && next.templateUrl != 'partials/login.html') {
        $location.path(Routes.signInPath);
      }
    }
  });
});
