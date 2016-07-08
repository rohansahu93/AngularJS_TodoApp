//instatiating module with dependencies
var noteApp = angular.module('noteApp', ['ui.router','ngStorage']);


//IIFE 
(function(){
noteApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    //routes for different view with their templates
    $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'homeController'
        })
    
        .state('trash', {
            url: '/trash',
            templateUrl: 'views/trash.html',
            controller: 'trashController'
        });
        
    });
})();
