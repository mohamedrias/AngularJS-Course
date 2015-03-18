/**
 * User: Rias
 * Date: 3/18/15
 * Time: 9:59 PM
 * Description : Description will be here
 * File name : common.filter.js
 */

(function() {
	"use strict";

	angular.module("common.modules")
		.filter('fromNow', function() {
			return function(input) {
				if(!input) return;
				return moment(input).fromNow();
			};
		});
})();