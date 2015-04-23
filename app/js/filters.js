roshreview.filter('unsafe', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});

roshreview.filter('xdate', function() {
  return function(input) {
    if(input == null){ return ""; }
    var _date = $filter('date')(new Date(input), 'MM/dd/yyyy');
    return _date.toUpperCase();
  };
});

roshreview.filter('percentageFormatter', function() {
  return function(percentage_string, type) {
    if (type == 'string'){
      return percentage_string
    }
    return isNaN(parseInt(percentage_string)) ? 0 : parseInt(percentage_string)
  };
})
