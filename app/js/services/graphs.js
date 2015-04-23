roshreviewServices.factory('Graph', ['$http', '$log', 'Headers', function($http, $log, Headers) {
  return {
    getData: function(url, successCB, data) {
      $http({
        method: 'GET',
        url: url,
        headers: Headers.get(),
        data: data
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        $log.warn('Some Error Occured');
      })
    }
  };
}]);

includeScripts([
  "js/services/chart_config/question_progress.js", "js/services/chart_config/score_progression.js"
]);
