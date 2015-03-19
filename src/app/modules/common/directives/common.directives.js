/**
 * User: Rias
 * Date: 3/16/15
 * Time: 11:16 PM
 * Description : Description will be here
 * File name : common.directives.js
 */
(function () {
    "use strict";
    angular.module("common.modules")
        /**
            auto-height directive for changing height of the textarea element dynamically.
            As the user presses enter key, the height of the textarea will auto adjust.
        **/
        .directive("autoHeight", function () {
            return {
                restrict: "EAC",
                link: function (scope, element, attrs) {
                    /**
                        binding a textarea to track the amount of content. If the content height increases,
                        the textarea height will also increase
                    **/
                    angular.element(element[0]).on('keyup', function () {
                        this.style.height = 0;
                        this.style.height = (this.scrollHeight === 0 || this.scrollHeight < 40) ? 40 + "px" : this.scrollHeight + "px";
                    });
                    /**
                        trigger the click event initially to setup a particular height.
                    **/
                    angular.element(element[0]).triggerHandler("keyup");
                }
            };
        })
        /**
            Name : RemainingTime
            Description: Used to calcualte the remaining time for next session to start.
        **/
        .directive("remainingTime", function ($timeout, $filter) {
            return {
                restrict: "ECA",
                /**
                 * Linker function which will modify the DOM element
                 * @param {object} scope   the scope object of controller
                 * @param {jQLite} element jQLite wrapped element
                 * @param {Object} attrs   Attributes api to access the different attributes
                 */
                link: function (scope, element, attrs) {
                    var intervalLength = 1000; // 1 seconds
                    // Filter to get the remaining time
                    var filter = $filter('fromNow'),
                        timeoutId;
                    /**
                     * Updates the time of attribute and sets it in the DOM text
                     */
                    function updateTime() {
                            var time = attrs.remainingTime;
                            element.text(filter(time));
                        }
                        /**
                         * Registers a setTimeout to run after particular persiod of time.
                         */
                    function updateLater() {
                        timeoutId = $timeout(function () {
                            updateTime();
                            updateLater();
                        }, intervalLength);
                    }

                    element.bind('$destroy', function () {
                        $timeout.cancel(timeoutId);
                    });

                    updateTime();
                    updateLater();
                }
            };
        });
})();
