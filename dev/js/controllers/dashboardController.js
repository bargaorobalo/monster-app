/**
 * @ngdoc controller
 * @name $dashboardController
 * @requires $scope
 *
 * @description
 * This controller handle with all application data
 */

(function () {
  "use strict";
  app.controller("dashboardController", ['$scope', function($scope) {

    /**
     * @ngdoc method
     * @name init
     * @methodOf $dashboardController
     * @description
     * This method initialize the page of dashboard which contains
     * graphics and status board.
     */
    $scope.init = function(){
      $scope.appName = "Monster App";
    };

  }]);
}());
