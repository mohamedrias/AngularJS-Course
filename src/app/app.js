/**
 * User: Rias
 * Date: 3/16/15
 * Time: 10:01 PM
 * Description : Setting up app namespace and loading necessary modules
 * File name : app.js
 */
(function() {
	"use strict";
	var app = angular.module("braintrain",["ngRoute", "common.modules"]);
	/**
        Setting up routes for the application.
        config() is the first function to run when the app bootstraps.
            Use config to set any configuration parameters to the app/service
    **/
    app.config(function($routeProvider) {
		$routeProvider
            /**
                Takes two arguments @url, @object.
                Object contains different properties such as
                    1. templateURL
                    2. controller
                    3. controllerAs (Alias name to the controller)
                    4. resolve (if you want to load data before loading the view)
                    5. template (HTML string of template)
            **/
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
            /**
                Used to redirect 404 pages.
            **/
			.otherwise("/");
	});
})();
