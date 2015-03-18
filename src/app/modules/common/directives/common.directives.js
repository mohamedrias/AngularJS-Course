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
		.directive("autoHeight", function () {
			return {
				restrict : "EAC",
				link : function(scope, element, attrs) {
					console.log(element[0]);
					angular.element(element[0]).on('keyup', function() {
						this.style.height = 0;
						this.style.height = (this.scrollHeight === 0 || this.scrollHeight < 40) ? 40+"px" : this.scrollHeight+"px";
					});
					angular.element(element[0]).triggerHandler("keyup");
				}
			}
		})
		.directive("remainingTime",  function($timeout, $filter) {

			return {
			restrict : "ECA",
			 link : function(scope, element, attrs) {
				var intervalLength = 1000; // 10 seconds
				var filter = $filter('fromNow'),
					timeoutId;
				function updateTime() {
					var time = attrs.remainingTime;
					element.text(filter(time));
				}

				function updateLater() {
					timeoutId = $timeout(function() {
						updateTime();
						updateLater();
					}, intervalLength);
				}

				element.bind('$destroy', function() {
					$timeout.cancel(timeoutId);
				});

				updateTime();
				updateLater();
			}
		}
	});
})();
