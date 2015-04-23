/* Controllers */
var roshreviewControllers = angular.module('roshreviewControllers', []);

roshreviewControllers.controller('MainCtrl', ['$rootScope', '$scope', '$cookieStore', '$location', 'Routes', 'Cookie',
  function($rootScope, $scope, $cookieStore, $location, Routes, Cookie) {

  $scope.logoutSubscriber = function () {
    Cookie.destroyData();
    $location.url(Routes.signInPath).replace();
  },

  $rootScope.loggedIn = function() {
    return $cookieStore.get('loggedIn');
  },

  $rootScope.fullname = function() {
    return $cookieStore.get('name') + '!';
  },

  $rootScope.showErrors = function(response, message, className) {
    $scope.showNotice = true;
    $scope.noticeMessage = message;
    $scope.noticeClass = className;

    angular.forEach(response.errors, function(error, key) {
      key = key.replace('.', '_');
      $scope[key + '_error'] = error.join(', ');
    })
  }
}]);

// Include all dependent js after initialization(EOF).
includeScripts([
  "js/controllers/login.js", "js/controllers/dashboard.js",
  "js/controllers/exam.js", "js/controllers/exams_history.js",
  "js/controllers/settings.js", "js/controllers/performance.js",
  "js/controllers/exams_question.js"
]);
