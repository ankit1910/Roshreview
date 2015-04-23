roshreviewServices.factory('QuestionProgressGraph', [function() {
  return {
    chartConfig: {
      options: {
        chart: { type: 'pie' }
      },
      title: { text: false },
      loading: true,
      size: {
       width: 300,
       height: 300
      }
    }
  }
}]);
