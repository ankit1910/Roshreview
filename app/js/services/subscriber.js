roshreviewServices.factory('Subscriber', ['$http', 'Routes', 'Headers', function($http, Routes, Headers) {
  return {
    login: function (params, successCB, failureCB) {
      $http({
        method: 'POST',
        url: Routes.Api.logInPath,
        data: params,
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        failureCB(data);
      })
    },

    settings_details: function(successCB) {
      $http({
        method: 'GET',
        headers: Headers.get(),
        url: Routes.Api.settingsPath
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        alert(data.errors);
      })
    },

    update: function(params, successCB, failureCB) {
      $http({
        method: 'PUT',
        url: Routes.Api.updatePath,
        headers: Headers.get(),
        data: params,
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        failureCB(data);
      })
    }
  };
}]);
