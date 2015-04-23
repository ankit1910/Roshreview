roshreviewControllers.controller('PerformanceCtrl', ['$scope', '$http', '$cookieStore', '$filter', '$location', 'Routes',  function($scope, $http, $cookieStore, $filter, $location, Routes) {
  var url = Routes.GraphApi.questionProgressPath,
      config = getHeaders($cookieStore),
      responsePromise = $http.get(url, config);
  $scope.chartConfig = {
    options: {chart: { type: 'pie' }},
    title: {text: false},
    loading: true,
    size: {
     width: 400,
     height: 400
    }
  }
  $scope.chartConfigHistory = {
    options: {
      chart: {
        type: 'area',
      },
    },
    title: {
      text: 'Cumulative Performance'
    },
    loading: true
  }
  responsePromise.success(function(dataFromServer, status, headers, config) {

    $scope.percentage_complete = 100 - parseInt(dataFromServer.total_unused);

    $scope.chartConfig = {
      options: {
        chart: { type: 'pie' }
      },
      series: [{
        data: [{
          name: 'Unattempted',
          color: '#5FA5DB',
          y: dataFromServer.total_unattempted
        }, {
          name: 'Unused',
          color: '#DDDF00',
          y: dataFromServer.total_unused
        }, {
          name: 'Incorrect',
          color: '#C12624',
          y: dataFromServer.total_incorrect
        }, {
          name: 'Correct',
          color: '#69CD4B',
          y: dataFromServer.total_correct
        }]
      }],
      title: {
         text: false
      },
      loading: false,
      //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
      //size (optional) if left out the chart will default to size of the div or something sensible.
      size: {
       width: 400,
       height: 400
      }
    }
  });

  responsePromise.error(function(data, status, headers, config) {
    alert(data.errors);
  });



  var url = Routes.GraphApi.cumulativePerformancePath,
      config = getHeaders($cookieStore),
      responsePromise;


  $.extend(config, { params: { skip_skipped_questions: 0, every_answer_considered: 1 } })
  responsePromise = $http.get(url, config);

  responsePromise.success(function(dataFromServer, status, headers, config) {
    $scope.cumulative_performance = dataFromServer.cumulative_performance;
    $scope.chartConfigMeter1 = {
      options: {
        chart: {
          type: 'solidgauge'
        },
        pane: {
          center: ['50%', '85%'],
          size: '80%',
          startAngle: -90,
          endAngle: 90,
          background: {
            backgroundColor:'#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
          }
        },
        solidgauge: {
          dataLabels: {
            y: -30,
            borderWidth: 0,
            useHTML: true
          }
        }
      },

      series: [{
        data: [parseInt(dataFromServer.projected_abem_score)],
        dataLabels: {
          format: '<div style="text-align:center"><span style="font-size:25px;color:black">' + parseInt(dataFromServer.projected_abem_score) + '</span><br/>' + 
                  '<span style="font-size:12px;color:silver">' + dataFromServer.score_label + '</span></div>'
        }
      }],

      title: {
        text: null
      },

      yAxis: {
        min: 0,
        max: 100,
        title: {
          y: 140
        },

        stops: [
          [0.1, '#DF5353'], // red
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#55BF3B'] // green
        ],

        lineWidth: 0,
        tickInterval: 20,
        tickPixelInterval: 400,
        tickWidth: 0,
        labels: {
          y: 15
        }
      }
    };

    $scope.chartConfigMeter2 = {
      options: {
        chart: {
          type: 'solidgauge'
        },
        pane: {
          center: ['50%', '85%'],
          size: '80%',
          startAngle: -90,
          endAngle: 90,
          background: {
            backgroundColor:'#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
          }
        },
        solidgauge: {
          dataLabels: {
            y: -30,
            borderWidth: 0,
            useHTML: true
          }
        }
      },

      series: [{
        data: [$filter('percentageFormatter')(parseInt(dataFromServer.probability_of_passing_abem))],
        dataLabels: {
          format: '<div style="text-align:center"><span style="font-size:25px;color:black">' + (dataFromServer.probability_of_passing_abem) + '</span><br/>' + 
                  '<span style="font-size:12px;color:silver">' + 'Probablity Of Passing' + '</span></div>'
        }
      }],

      title: {
        text: null
      },

      yAxis: {
        min: 0,
        max: 100,
        title: {
          y: 140
        },

        stops: [
          [0.1, '#DF5353'], // red
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#55BF3B'] // green
        ],

        lineWidth: 0,
        tickInterval: 20,
        tickPixelInterval: 400,
        tickWidth: 0,
        labels: {
          y: 15
        }
      }
    }
  });

  responsePromise.error(function(data, status, headers, config) {
    alert(data.errors);
  });


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var url = Routes.GraphApi.cumulativePerformanceHistoryPath,
      config = getHeaders($cookieStore),
      responsePromise;


  $.extend(config, { params: { skip_skipped_questions: 0, every_answer_considered: 1 } })
  responsePromise = $http.get(url, config);

  responsePromise.success(function(dataFromServer, status, headers, config) {
    seriesData = []
    $.each(dataFromServer, function(index, element) {
      seriesData.push([element.created_at_in_milliseconds, element.performance])
    })

    $scope.chartConfigHistory = {
      options: {
        chart: {
          type: 'area',
          zoomType: 'x'
        },
        rangeSelector: {
          enabled: true
        },
      },
      series: [{
        data: seriesData
      }],
      title: {
        text: 'Cumulative Performance'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%b %d'
        },
        labels: { text: null },
        maxZoom: 14 * 24 * 3600000 // fourteen days
      },
    }
  });

  responsePromise.error(function(data, status, headers, config) {
    alert(data.errors);
  });
}]);


