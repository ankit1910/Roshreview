roshreviewControllers.controller('SettingsCtrl', ['$scope', '$filter', '$location', 'Routes', 'Subscriber', 'Cookie',
  function($scope, $filter, $location, Routes, Subscriber, Cookie) {
  $scope.settingsForm = {};

  Subscriber.settings_details(function(data) {
    $scope.settingsForm = data.subscriber_settings;
    $scope.settingsForm.school_name = $scope.settingsForm.current_school_name;
    $scope.settingsForm.study_objective = getDefaultStudyObjective($scope.settingsForm.current_study_objective_id);
    $scope.settingsForm.exam_date = $filter('date')($scope.settingsForm.real_world_exam_date, "dd/MM/yyyy");
  });

  $scope.examChangeListener = function() {
    $scope.settingsForm.exam_date = $filter('date')($scope.settingsForm.study_objective.default_exam_date, "dd/MM/yyyy");
  }

  $scope.submitForm = function() {
    var params = {
      subscriber: {
        firstname: $scope.settingsForm.firstname,
        lastname: $scope.settingsForm.lastname,
        school_name: $scope.settingsForm.school_name,
        study_objective_id: $scope.settingsForm.study_objective.id,
        real_world_exam_date: $scope.settingsForm.exam_date,
        account_attributes: {
          password: $scope.settingsForm.password,
          password_confirmation: $scope.settingsForm.password_confirmation
        }
      }
    }

    Subscriber.update(params, function(data) {
      Cookie.setData(data.meta);
      $location.url(Routes.dashboardPath).replace();
    }, function(data) {
      $scope.showErrors(data, data.message, 'alert-message')
    })
  },

  // Private methods
  getDefaultStudyObjective = function(id) {
    var exams = $scope.settingsForm.study_objectives,
        defaultExam;

    angular.forEach(exams, function(exam, index) {
      if(exam.id == id) {
        defaultExam = exam;
      }
    });
    return defaultExam
  }
}]);
