"use strict";

let app = angular.module("my-app", ["chart.js"]);

app.controller("ctrl", function ($scope) {
    $scope.conf = {
        type: 'windRadar',
        data: {
            labels: ["90", "", "60", "", "30", "", "0", "", "330", "", "300", "", "270", "", "240", "", "210", "", "180", "", "150", "", "120", ""],
            datasets: [{
                label: "My only dataset",
                fill: false,
                borderColor: "red",
                pointBackgroundColor: "red",
                data: [
                    { x: 250, y: 0 },
                    { x: 500, y: 30 },
                    { x: 750, y: 20 },
                    { x: 790, y: 25 },
                    { x: 940, y: 27 }
                ]
            }]
        },
        options: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Windradar Chart'
            },
            scale: {
                type: 'windDirection',
                ticks: {
                    beginAtZero: true
                }
            }
        }
    };

    $scope.labels = $scope.conf.data.labels;
    $scope.series = $scope.conf.data.datasets[0].label;
    $scope.data = $scope.conf.data.datasets[0].data;
    $scope.options = $scope.conf.options;
    $scope.type = $scope.conf.type;
});

/*angular.module("my-app", ["chart.js"])
  // Optional configuration 
  /*.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts 
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts 
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }])
  .controller("ctrl", ['$scope', '$timeout', function ($scope, $timeout) {
 
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.type = "line";
  
  // Simulate async data update 
  $timeout(function () {
    $scope.data = [
      [28, 48, 40, 19, 86, 27, 90],
      [65, 59, 80, 81, 56, 55, 40]
    ];
  }, 3000);
}]);*/

/*angular.module("my-app", ["chart.js"]).controller("ctrl",
  function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data = [300, 500, 100, 40, 120];
    $scope.type = 'polarArea';

    $scope.toggle = function () {
      $scope.type = $scope.type === 'polarArea' ?
        'pie' : 'polarArea';
    };
});*/