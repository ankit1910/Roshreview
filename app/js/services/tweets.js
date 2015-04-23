roshreviewServices.factory('Tweets', ['$http', '$log', 'Routes', 'Headers', function($http, $log, Routes, Headers) {
  return {
    get: function (successCB) {
      $http({
        method: 'GET',
        url: Routes.Api.tweetsPath,
        headers: Headers.get()
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        $log.warn('Some Error Occured');
      })
    }
  };
}]);
