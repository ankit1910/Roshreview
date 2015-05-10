roshreviewServices.factory('Routes', [function() {
  var BasePath = 'http://localhost:3000/';
  var GraphsBasePath = 'http://localhost:9292/';
  var Routes = {
    rootPath: '/',
    dashboardPath: '/dashboard',
    signInPath: '/login',
    newSubscribersPath: '/new',
    selfCreatedExamsListPath: '#/self_created_exams',
    assignedExamsListPath: '#/assigned_exams',
    examShowPath: function(id) {
      return '/exams/' + id
    },
    Api: {
      tweetsPath: BasePath + 'api/v1/tweets',
      logInPath: BasePath + 'api/v1/login',
      selfCreatedExamsListPath: BasePath + 'api/v1/exams/history/self_created',
      assignedExamsListPath: BasePath + 'api/v1/exams/history/assigned',
      dashboardPath: BasePath + 'api/v1/subscriber/settings',
      detailsForNewExam: BasePath + 'api/v1/exams/new/details',
      selfCreatedExamsHistory: BasePath + 'api/v1/exams/history/self_created',
      assignedExamsHistory: BasePath + 'api/v1/exams/history/assigned',
      unstartedAssignedExams: BasePath + 'api/v1/exams/unstarted_assigned_exams',
      createAssignedExam : BasePath + 'api/v1/exams/create_assigned',
      createExamPath : BasePath + 'api/v1/exams',
      settingsPath : BasePath + 'api/v1/subscriber/settings',
      updatePath : BasePath + 'api/v1/subscriber',
      detailsForNew : BasePath + 'api/v1/subscriber/new/details'
    },
    GraphApi: {
      questionProgressPath: GraphsBasePath + 'v1/subscriber/questions_progress',
      scoreProgressionPath: GraphsBasePath + 'v1/subscriber/score_progression',
      cumulativePerformancePath: GraphsBasePath + 'v1/subscriber/cumulative_performance',
      cumulativePerformanceHistoryPath: GraphsBasePath + 'v1/subscriber/cumulative_performance_history'
    }
  };
  return Routes;
}]);
