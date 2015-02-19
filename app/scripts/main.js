'use strict';

var app = angular.module('githubApp', []);

app.controller('defaultCtrl', function($scope) {
    console.log('er ma gerd fired');
    $scope.testing = "wow";
});