'use strict';

var app = angular.module('githubApp', []);

app.controller('defaultCtrl', function($scope) {
    console.log('er ma gerd fired');
    $scope.testing = "wow";

//region Steps
    $scope.currentStep = 0;
    $scope.steps = [
        {
            title: 'First',
            subtitle: 'only if',
            image: "http://assets6.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-shuffle/pokemon-shuffle-169.jpg",
            imageText: "haha"
        },
        {
            title: 'Second',
            subtitle: '',
            image: "../images/test.jpg",
            imageText: "wewe"
        },
        {
            title: 'Third',
            subtitle: 'this shows',
            image: "http://assets18.pokemon.com/assets/cms2/img/trading-card-game/_tiles/xy05/xy05-groudon-kyogre-169.jpg",
            imageText: "dada"
        }
    ];

    $scope.nextStep = function() {
        if (this.currentStep <= 10) {
            this.currentStep++;
            $scope.setProgressPercentage(this.currentStep);
        }
    };

    $scope.previousStep = function() {
        if (this.currentStep > 0) {
            this.currentStep--;
            $scope.setProgressPercentage(this.currentStep);
        }
    };
//endregion

//region Progress Bar
    $scope.calcProgressPercentage = function(current, length){
        var currentNum = current + 1,
            percentage = Math.round((currentNum/length)*100);
        return percentage
    };

    $scope.setProgressPercentage = function(current){
        console.log('setProg current step', current);
        $scope.progressPercentage = $scope.calcProgressPercentage(current, $scope.steps.length);
    };

    // Initialize Progress Bar Fill on load
    $scope.setProgressPercentage($scope.currentStep);
    $scope.isFirstStep = function(){};
//endregion

});
