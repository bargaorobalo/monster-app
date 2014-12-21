/**
 * @ngdoc service
 * @name $dashboardService
 * @requires $scope
 *
 * @description
 * This service communicate with server to get app list
 */

(function () {
  "use strict";
  app.factory("dashboardService", ["$http", function($http) {
    return {
      getAppList: function(){
        var url = "http://demo2177885.mockable.io/apps";
        return $http.get(url);
      },
      getCloneUrl: function(){
        var url = "http://demo2177885.mockable.io/error";
        return $http.get(url);
      }
    };
  }]);
}());
