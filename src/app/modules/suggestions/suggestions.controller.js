/**
 * User: Rias
 * Date: 3/17/15
 * Time: 12:16 AM
 * Description : Description will be here
 * File name : suggestions.controller.js
 */

angular.module("braintrain")
	.controller("SuggestionsController", ["$scope", "SuggestionsService",  function($scope,SuggestionsService) {
		$scope.suggestion = {};

		$scope.submitSuggestion = function() {
			if(!$scope.suggestion.course) {
				alert("Please enter the category");
				return;
			}
			if(!$scope.suggestion.suggestion) {
				alert("Please enter suggestion to submit");
				return;
			}

			SuggestionsService.submitSuggestion($scope.suggestion)
				.then(function(data) {
					$scope.suggestion = {};
					alert("Thanks for submitting your suggestion");
				});
		}
	}]);