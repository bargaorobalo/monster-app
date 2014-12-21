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
  app.controller("dashboardController", ["$scope", "dashboardService", function($scope, dashboardService) {

    /**
     * @ngdoc method
     * @name init
     * @methodOf $dashboardController
     * @description
     * This method initialize the page of dashboard which contains
     * graphics and status board.
     */
    $scope.init = function(){
      $scope.getAppList();
    };

    /**
     * @ngdoc method
     * @name getAppList
     * @methodOf $dashboardController
     * @description
     * Consult the service to get list of app
     * @returns {object} list of apps
     */
    $scope.getAppList = function(){
      $scope.appList = [];
      dashboardService.getAppList().then(function(result){
        for (var i = result.data.length - 1; i >= 0; i--) {
          if(result.data[i].isActive === true){
            $scope.appList.push(result.data[i]);
          }
        }
      },function(doh){
        console.log(doh);
      });
    };

    /**
     * @ngdoc method
     * @name getCloneUrl
     * @methodOf $dashboardController
     * @description
     * Consult the service to get the clone URL, but it will return error
     * @returns {object} ERROR 500
     */
    $scope.getCloneUrl = function(){
      $scope.appList = [];
      dashboardService.getCloneUrl().then(function(result){
        console.info("RESULT: ",result);
      },function(doh){
        if(doh.status !== 200){
          alert(doh.data.msg);
        }

      });
    };

  }]);
}());
