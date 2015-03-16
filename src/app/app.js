/**
 * User: Rias
 * Date: 3/16/15
 * Time: 10:01 PM
 * Description : Description will be here
 * File name : app.js
 */
(function() {
	"use strict";
	var app = angular.module("braintrain",["ngRoute", "common.modules"]);
	app.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "app/modules/dashboard/dashboard.template.html",
				controller : "DashboardController"
			})
			.when("/questions", {
				templateUrl : "app/modules/questions/questions.template.html",
				controller : "QuestionsController"
			})
			.when("/suggestions", {
				templateUrl : "app/modules/suggestions/suggestions.template.html",
				controller : "SuggestionsController"
			})
			.otherwise("/");
	});
})();