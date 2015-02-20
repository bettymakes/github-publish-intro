'use strict';

var app = angular.module('githubApp', ['ngSanitize']);

app.controller('defaultCtrl', function($scope) {
    console.log('er ma gerd fired');
    $scope.testing = "wow";

//region Steps
    $scope.currentStep = 0;
    $scope.steps = [
        {
            title: 'Log into your <a href="https://github.com/login">Github</a> account.',
            subtitle: 'If you do not have a Github account, you\'ll need to <a href="https://github.com/join">create one</a> first.',
            image: "../images/01-sign-in.jpg",
            imageText: "Log into Github"
        },
        {
            title: 'In the nav bar, you\'ll see a plus-sign icon. Click on that icon and select create new repository.',
            subtitle: '',
            image: "../images/02-create-new-repo.jpg",
            imageText: "Create new repository"
        },
        {
            title: 'Enter a repository name',
            subtitle: 'Think of this as the name of your project. It should be relevant and memorable.',
            image: "../images/03-repo-name.jpg",
            imageText: "Name new repo"
        },
        {
            title: "Select initialize this repository with a README and create a repository.",
            subtitle: 'Double check that Public is selected. It should already be chosen by default.',
            image: "../images/04-public-readme-create.jpg",
            imageText: "Create Repository with README "
        },
        {
            title: "To create a new file, click on the plus-sign next to your repository name.",
            subtitle: '',
            image: "../images/05-create-new-file.jpg",
            imageText: "Create New File"
        },
        {
            title: "Name your file 'index.html'.",
            subtitle: '',
            image: "../images/06-name-file.jpg",
            imageText: "Name File index.html"
        },
        {
            title: "Copy your code from Sublime or from whatever IDE you're using",
            subtitle: '',
            image: "../images/07-copy-code.jpg",
            imageText: "Copy Code From IDE"
        },
        {
            title: "Go back to your web browser to the page where we named our file 'index.html' and paste your code.",
            subtitle: '',
            image: "../images/08-paste-code.jpg",
            imageText: "Paste Code"
        },
        {
            title: "Click on the 'Commit new file' button at the bottom of the page to save your changes.",
            subtitle: '',
            image: "../images/09-commit-file.jpg",
            imageText: "Commit File"
        },
        {
            title: "Back on your main repository page, click on the button that says 'branch: master' and in the input, create a new branch called 'gh-pages'.",
            subtitle: 'Make sure your new branch is the exact same as the instructions \'gh-pages\'',
            image: "../images/10-create-branch-gh-pages.jpg",
            imageText: "Create Branch gh-pages"
        },
        {
            title: "And that's it! You're done. <br> <br> It may take 5-10 minutes for your page to go live.",
            subtitle: '',
            image: "../images/11-its-alive.jpg",
            imageText: ""
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
