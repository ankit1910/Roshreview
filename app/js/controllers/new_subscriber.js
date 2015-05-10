roshreviewControllers.controller('NewSubscriberCtrl', ['$scope', '$filter', '$location', 'Routes', 'Subscriber', 'Cookie',
  function($scope, $filter, $location, Routes, Subscriber, Cookie) {

  $scope.newSubscriberForm = {};
  Subscriber.details_for_new(function(data) {
    $scope.newSubscriberForm.training_levels = data.training_levels
    $scope.newSubscriberForm.degrees = data.degrees
    $scope.newSubscriberForm.graduation_years = data.graduation_years
    $scope.all_study_objectives = data.study_objectives
  })

  $scope.degreeChangeListener = function(degree) {
    $scope.newSubscriberForm.specialities = degree.specialities;
    $scope.newSubscriberForm.speciality = degree.specialities[0];
    $scope.specialityChangeListener(degree.specialities[0]);
    $scope.newSubscriberForm.school_names = degree.school_names;
    $scope.newSubscriberForm.school_name = degree.school_names[0];
  }

  $scope.specialityChangeListener = function(speciality) {
    $scope.newSubscriberForm.programs = speciality.programs;
    $scope.newSubscriberForm.program = speciality.programs[0];
    populateStudyObjective($scope.newSubscriberForm.training_level, speciality)
  }

  $scope.trainingLevelChangeListener = function(training_level) {
    populateStudyObjective(training_level, $scope.newSubscriberForm.speciality)
  }

  populateStudyObjective = function(training_level, speciality) {
    if(training_level && speciality) {
      $scope.study_objectives = getStudyObjectives(training_level.id, speciality.id)
    }
  }

  getStudyObjectives = function(training_level_id, speciality_id) {
    var context = {
      training_level_id: training_level_id,
      speciality_id: speciality_id,
      study_objectives: []

    }

    angular.forEach($scope.all_study_objectives, function(element) {
      if(element.speciality_id == this.speciality_id && element.training_level_id == this.training_level_id) {
        this.study_objectives.push(element)
      }
      $scope.newSubscriberForm.study_objectives = this.study_objectives;
    }, context);
  }
}]);
