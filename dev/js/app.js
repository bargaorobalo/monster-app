"use strict";

var app = angular.module("monsterApp", ["ngResource", "ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when("/", {
      templateUrl : 'views/dashboard.html',
      controller  : 'dashboardController'
    })
    .otherwise({
      redirectTo: "/"
    });
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
});
