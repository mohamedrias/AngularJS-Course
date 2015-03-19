/**
 * User: Rias
 * Date: 3/16/15
 * Time: 11:27 PM
 * Description : Description will be here
 * File name : questions.service.js
 */
angular.module("braintrain")
    .factory("QuestionsService", function ($q, $timeout) {

        var QuestionService = {},
            questionFBRef = new Firebase("https://rasng.firebaseio.com/questions");

        // Creates a socket to fetch data from the server
        questionFBRef.on("value", function (data) {
            QuestionService.data = data.val() || [];
        });

        /**
         * Submit question data to the server
         * @param   {object} question Object which contains category and description of question
         * @returns {object} Returns promise object.
         */
        QuestionService.submitQuestion = function (question) {
            var defer = $q.defer();
            questionFBRef.push(question);
            $timeout(function () {
                defer.resolve(QuestionService.data);
            });
            return defer.promise;
        };

        return QuestionService;
    });
