/**
 * User: Rias
 * Date: 3/17/15
 * Time: 12:39 AM
 * Description : Description will be here
 * File name : dashboard.controller.js
 */

(function () {
    angular.module("braintrain")
        .controller("DashboardController", ["$scope", "DashboardService", function ($scope, DashboardService) {
            //TODO: Move it to router and resolve it there
            // Invokes dashboard service getDetails method to fetch the data from server.
            DashboardService.getDetails()
                .then(function (data) {
                    $scope.today = data;
                });
  }]);
})();
