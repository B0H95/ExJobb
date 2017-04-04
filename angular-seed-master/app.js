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