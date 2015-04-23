roshreviewControllers.controller('ExamHistoryCtrl', ['$scope', 'Routes', 'type', 'Exam',
  function($scope, Routes, type, Exam) {

  $scope.exams = {},
  $scope.pageNumber = 1;

  $scope.fetchExams = function (pageNumber) {
    var params = { page: pageNumber };

    Exam.get_list(getURL(type), params, function(data) {
      $scope.exams = (data.exams || data.admin_exams_program)
      $scope.previousPageNumber = parseInt(data.meta.page_number) - 1;
      $scope.nextpageNumber = parseInt(data.meta.page_number) + 1;
    })
  },

  getURL = function() {
    if (type == "self_created") {
      return Routes.Api.selfCreatedExamsHistory
    } else if (type == "assigned" ) {
      return Routes.Api.assignedExamsHistory
    } else if (type == "unstarted_assigned") {
      return Routes.Api.unstartedAssignedExams
    }
  }

  $scope.fetchExams(1);
}]);
