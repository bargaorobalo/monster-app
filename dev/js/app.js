var app = angular.module("monsterApp", ["ngResource", "ngRoute"]);

/**
 * @ngdoc overview
 * @name app
 *
 * @description
 * MonsterApp Application is a system monitor.
 */
(function(){
  "use strict";
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
})();
