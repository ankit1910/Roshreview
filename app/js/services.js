var roshreviewServices = angular.module('roshreviewServices', []);


// Include all dependent js after initializatio(EOF).
includeScripts([
  "js/services/cookie.js", "js/services/exam.js",
  "js/services/routes.js", "js/services/tweets.js",
  "js/services/graphs.js", "js/services/subscriber.js",
  "js/services/headers.js",
]);
