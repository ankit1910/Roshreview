'use strict';

/* Directives */
roshreview.directive('dateOfCompletion', function() {
  return {
    template: '{{exam.is_submitted? (exam.completion_date | date) : "In Progress"}}'
  };
});

roshreview.directive('correctCount', function() {
  return {
    template: '{{exam.is_submitted? ((exam.correct_count | number) + "/" +(exam.question_count)) : "-"}}'
  };
});

roshreview.directive('scorePercentage', function() {
  return {
    template: '{{exam.is_submitted? (((exam.correct_count / exam.question_count) * 100) | number : 0) + "%" : "-"}}'
  };
});

roshreview.directive('statusimage', function() {
  return {
    template: '<img alt="Fa_check_circle" src="/app/images/{{exam.is_submitted? "fa_check_circle.png" : "In Progress}}">'
  };
});


// Include all dependent js after initialization(EOF).
includeScripts([
  "js/directives/header_bar.js", "js/directives/page_navigator.js",
  "js/directives/flash_notice.js"
]);


