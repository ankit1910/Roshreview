roshreviewControllers.controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {
  // $scope.loginForm = {};

  // $scope.loginForm.submitForm = function() {
  //   var url = $scope.app.apiroutes.logInPath;
  //   var dataObject = {
  //     account: {
  //       email: $scope.loginForm.email,
  //       password: $scope.loginForm.password
  //     }
  //   };
  //   var responsePromise = $http.post(url, dataObject, {});

  //   responsePromise.success(function(dataFromServer, status, headers, config) {
  //     console.log(dataFromServer.meta);
  //     $scope.setDataInCookie(dataFromServer.meta);
  //     $location.url('/dashboard').replace();
  //   });
  //   responsePromise.error(function(data, status, headers, config) {
  //     alert(data.errors);
  //   });
  // },

  // $scope.setDataInCookie = function (data) {
  //   setCookie('email', data.email, 1);
  //   setCookie('authorization_token', data.authorization_token, 1);
  //   setCookie('id', data.id, 1);
  // }
}]);
