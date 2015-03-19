/**
 * User: Rias
 * Date: 3/18/15
 * Time: 9:59 PM
 * Description : All common module filters will be listed here
 * File name : common.filter.js
 */

(function () {
    "use strict";
    angular.module("common.modules")
        /**
         *   Filter to calculate amount of time left using moment.js
         **/
        .filter('fromNow', function () {
            return function (input) {
                if (!input) return;
                return moment(input).fromNow();
            };
        });
})();
