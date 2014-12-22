var app = angular.module("monsterApp", [ "ngResource", "ngRoute", "LocalStorageModule"]);

/**
 * @ngdoc overview
 * @name app
 *
 * @description
 * MonsterApp Application is a system monitor.
 */
(function(){
  "use strict";
  app.config(function($routeProvider, $locationProvider, localStorageServiceProvider){
    localStorageServiceProvider.setPrefix("monsterApp");
    $routeProvider
      .when("/", {
        templateUrl : "views/dashboard.html",
        controller  : "dashboardController"
      })
      .otherwise({
        redirectTo: "/"
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
  });
})();
