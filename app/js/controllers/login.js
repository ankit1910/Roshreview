roshreviewControllers.controller('LoginCtrl', ['$scope', '$location', 'Routes', 'Subscriber', 'Cookie',
  function($scope, $location, Routes, Subscriber, Cookie) {
  $scope.loginForm = {};
  $scope.showNotice = false;

  if ($scope.loggedIn()) {
    $location.url(Routes.dashboardPath).replace();
  }

  $scope.loginForm.submitForm = function() {
    var params = {
      account: {
        email: $scope.loginForm.email,
        password: $scope.loginForm.password
      }
    };
    Subscriber.login(params, function(data) {
      Cookie.setData(data.meta);
      $location.url(Routes.dashboardPath).replace()
    }, function(data) {
      $scope.showNotice = true;
      $scope.noticeMessage = data.errors;
      $scope.noticeClass = 'alert-message';
    });
  }
}]);
