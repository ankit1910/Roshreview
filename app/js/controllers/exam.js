roshreviewControllers.controller('ExamCtrl', ['$scope', '$location', 'Routes', 'Exam',
  function($scope, $location, Routes, Exam) {
  $scope.details = {};
  $scope.createExamForm = {}

  Exam.get_details_for_new(function(data) {
    $scope.details = data;
  })


  $scope.create_assigned = function(id) {
    var params = { admin_exams_program_id: id };
    Exam.create(Routes.Api.createAssignedExam, params, function(data) {
      $location.url(Routes.examShowPath(data.meta.exam_id)).replace();
    }, function(data) {
      alert(data.errors);
    })
  }

  $scope.create = function() {
    var params = {
      exam: {
        question_count: $scope.createExamForm.question_count,
        mode: $scope.createExamForm.exam_mode,
        timed: $scope.createExamForm.time_mode,
        question_type: $scope.createExamForm.question_type,
        category_list: ['all'],
      }
    }

    Exam.create(Routes.Api.createExamPath, params, function(data) {
      $location.url(Routes.examShowPath(data.meta.exam_id)).replace();
    }, function(data) {
      $scope.showErrors(data, data.message, 'alert-message');
    })
  }
}]);
