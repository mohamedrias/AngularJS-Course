/**
 * User: Rias
 * Date: 3/16/15
 * Time: 10:51 PM
 * Description : Description will be here
 * File name : questions.controller.js
 */
angular.module("braintrain")
	.controller("QuestionsController", ["$scope", "QuestionsService",  function($scope,QuestionsService) {
		$scope.question = {};

		$scope.submitQuestion = function() {
			if(!$scope.question.course) {
				alert("Please enter the category");
				return;
			}
			if(!$scope.question.question) {
				alert("Please enter question to submit");
				return;
			}

			QuestionsService.submitQuestion($scope.question)
				.then(function(data) {
					$scope.question = {};
					alert("Thanks for submitting your questions");
				});
		}
	}]);