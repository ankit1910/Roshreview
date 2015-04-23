roshreviewServices.factory('ScoreProgressionGraph', [function() {
  return {
    chartConfig: {
      legend: { enabled: false },
      tooltip: {
        formatter: function() {
          return 'Exam#' + this.x +' - '+ this.y +'%'
        }
      },
      options: {
        chart: { type: 'area' }
      },
      xAxis: {
        min: 0,
        title: { text: "Exam number" },
        formatter: function() { return(this.value + 1) },
        allowDecimals: false
      },
      yAxis: {
        min: 0,
        max: 100,
        title: { text: "Percentage (%)" },
        labels: { overflow: "justify" }
      },
      title: { text: false },
      loading: true,
      size: {
        width: 720,
        height: 250
      }
    }
  }
}]);
