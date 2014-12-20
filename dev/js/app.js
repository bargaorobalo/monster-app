"use strict";

var app = angular.module("monsterApp", ["ngResource", "ngRoute"]);

// app.config([ "$httpProvider", "$locationProvider", function($httpProvider, $locationProvider){
//   $locationProvider.html5Mode(true);
//   $locationProvider.hashPrefix('!');
// }]);

app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : 'views/dashboard.html',
      controller  : 'dashboardController'
    })
    .otherwise({
      redirectTo: "/"
    });
});
