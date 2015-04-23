roshreviewServices.factory('Exam', ['$http', '$log', '$cookieStore', 'Routes', 'Headers', function($http, $log, $cookieStore, Routes, Headers) {
  return {
    get_details_for_new: function(successCB) {
      $http({
        method: 'GET',
        url: Routes.Api.detailsForNew,
        headers: Headers.get()
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        $log.warn('Some Error Occured');
      })
    },

    create: function(url, params, successCB, failureCB) {
      $http({
        method: 'POST',
        url: url,
        headers: Headers.get(),
        data: params
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        failureCB(data);
      })
    },

    get_list: function(url, params, successCB) {
      $http({
        method: 'GET',
        url: url,
        headers: Headers.get(),
        data: params
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        alert(data.errors);
      })
    }
  }
}]);
