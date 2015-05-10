
/* Directives */
roshreview.directive('studyObjectiveSelect', ['$filter', function($filter) {
  return {
    restrict: 'E',
    templateUrl: 'partials/widgets/study_objective_select.html',
    scope: {
      objects: '=',
      modelValue: '=',
    },
    link: function (scope, element, attrs) {
      element.find('#exam').on('change', function() {
        scope.settingsForm.exam_date = $filter('date')(scope.settingsForm.study_objective.default_exam_date, "dd/MM/yyyy");
      })
    }
  };
}]);

