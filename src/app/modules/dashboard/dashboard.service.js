/**
 * User: Rias
 * Date: 3/17/15
 * Time: 12:43 AM
 * Description : Description will be here
 * File name : dashboard.service.js
 */

angular.module("braintrain")
    .factory("DashboardService", function ($q, $timeout) {

        var DashboardService = {},
            DashboardServiceRef = new Firebase("https://rasng.firebaseio.com/Today");

        DashboardService.getDetails = function () {
            var defer = $q.defer();
            DashboardServiceRef.on("value", function (data) {
                DashboardService.data = data.val() || [];
                defer.resolve(DashboardService.data);
            });
            return defer.promise;
        };

        return DashboardService;
    });
