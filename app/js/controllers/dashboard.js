roshreviewControllers.controller('DashboardCtrl', ['$scope', 'Routes', 'Tweets', 'Graph', 'QuestionProgressGraph', 'ScoreProgressionGraph',
  function($scope, Routes, Tweets, Graph, QuestionProgressGraph, ScoreProgressionGraph) {

  $scope.tweets = {};
  $scope.questionProgress = {};
  $scope.scoreProgression = {};
  $scope.questionProgress.chartConfig = QuestionProgressGraph.chartConfig;
  $scope.scoreProgression.chartConfig = ScoreProgressionGraph.chartConfig;

  Tweets.get(function(tweets) {
    $scope.tweets = tweets;
  })

  Graph.getData(Routes.GraphApi.questionProgressPath, function(data) {
    $scope.questionProgress.unused = data.total_unused;
    $scope.questionProgress.used = data.total_correct + data.total_incorrect + data.total_unattempted;
    $.extend($scope.questionProgress.chartConfig, {
      loading: false,
      series: [{
        data: [{
          name: 'Used',
          color: '#50B432',
          y: $scope.questionProgress.used
        }, {
          name: 'Unused',
          color: '#ED561B',
          y: $scope.questionProgress.unused
        }]
      }]
    })
  })

  Graph.getData(Routes.GraphApi.scoreProgressionPath, function(data) {
    $.extend($scope.scoreProgression.chartConfig, {
      loading: false,
      series: [{
        data: data.percentages
      }]
    })
  })
}]);
