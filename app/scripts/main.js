'use strict';

var app = angular.module('githubApp', ['ngSanitize']);

app.controller('defaultCtrl', function($scope) {
    $scope.showIntroPage = true;

    $scope.startTutorial = function(){
        $scope.showIntroPage = false;
    };
//region Steps
    $scope.currentStep = 0;
    $scope.steps = [
        {
            title: 'Log into your <a href="https://github.com/login">Github</a> account.',
            subtitle: 'If you do not have a Github account, you\'ll need to <a href="https://github.com/join">create one</a> first.',
            image: "../github-intro-to-publishing/images/01-sign-in.jpg",
            imageText: "Log into Github"
        },
        {
            title: 'Click on the plus sign icon in the navigation bar and select \'New repository\'.',
            subtitle: '',
            image: "../github-intro-to-publishing/images/02-create-new-repo.jpg",
            imageText: "Create new repository"
        },
        {
            title: 'Enter a repository name',
            subtitle: 'Your repository name is essentially the name of your project. It should be relevant to what your making. ' +
                '<br>\'Poop-Monster\' would be an example of a bad name for your repository (unless, your work is actually poop-monster related). ' +
                '<br>Hey, whatever floats your boat, my friend!',
            image: "../github-intro-to-publishing/images/03-repo-name.jpg",
            imageText: "Name new repo"
        },
        {
            title: "Select 'Initialize this repository with a README' and then 'Create repository'.",
            subtitle: 'Double check that \'Public\' is selected. It should already be chosen by default.',
            image: "../github-intro-to-publishing/images/04-public-readme-create.jpg",
            imageText: "Create Repository with README "
        },
        {
            title: "Your repository is now created. To make a new file, click on the plus sign next to your repository's name.",
            subtitle: '',
            image: "../github-intro-to-publishing/images/05-create-new-file.jpg",
            imageText: "Create New File"
        },
        {
            title: "Name your file 'index.html'.",
            subtitle: 'Github will be looking for the index.html file, so be sure to name it exactly as per instructions.',
            image: "../github-intro-to-publishing/images/06-name-file.jpg",
            imageText: "Name File index.html"
        },
        {
            title: "Copy your code from Sublime or from whatever IDE/text editor that you're using.",
            subtitle: '',
            image: "../github-intro-to-publishing/images/07-copy-code.jpg",
            imageText: "Copy Code From IDE"
        },
        {
            title: "Head back to your web browser, to the page where we named our file 'index.html', and paste your code in the text editor.",
            subtitle: '',
            image: "../github-intro-to-publishing/images/08-paste-code.jpg",
            imageText: "Paste Code"
        },
        {
            title: "Click on the 'Commit new file' button at the bottom of the page to save your changes.",
            subtitle: 'If you have additional files like a \'styles.css\' or a \'main.js\', repeat steps 5 through 9. <br><br>' +
                'For step 6, instead of naming your file \'index.html\', you\'ll need to name those additional files accordingly. <br><br>' +
                'If you\'re not too sure how to do that, fear not my friend! I\'m just a <a href="https://twitter.com/blibotics/">tweet</a> away.',
            image: "../github-intro-to-publishing/images/09-commit-file.jpg",
            imageText: "Commit File"
        },
        {
            title: "Once you're back on the main repository page, click on the dropdown that says \'branch: master\'.<br> " +
                "In the input field, create a new branch called 'gh-pages'.",
            subtitle: 'In order for Github to get your website up online, they\'ll be looking for the gh-pages branch. So be sure to name your branch exactly as per instructions.',
            image: "../github-intro-to-publishing/images/10-create-branch-gh-pages.jpg",
            imageText: "Create Branch gh-pages"
        },
        {
            title: "Et voila! That's it, you\'re done.",
            subtitle: 'Go grab a cup of coffee, it may take 5-10 minutes for your page to go live. I\'d love to check out your hard work. <a href="https://twitter.com/blibotics/">Share</a> it with me!',
            image: "../github-intro-to-publishing/images/11-its-alive.jpg",
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
//        console.log('setProg current step', current);
        $scope.progressPercentage = $scope.calcProgressPercentage(current, $scope.steps.length);
    };

    // Initialize Progress Bar Fill on load
    $scope.setProgressPercentage($scope.currentStep);
    $scope.isFirstStep = function(){};
//endregion

});
