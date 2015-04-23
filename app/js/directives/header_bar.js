'use strict';

/* Directives */
roshreview.directive('headerBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/widgets/header_bar.html'
  };
});

roshreview.directive('examHeaderBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/widgets/exam_header_bar.html'
  };
});

roshreview.directive('unstartedExamHeaderBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/widgets/unstarted_exam_header_bar.html'
  };
});
