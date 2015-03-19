/**
 * User: Rias
 * Date: 3/17/15
 * Time: 12:16 AM
 * Description : Description will be here
 * File name : suggestions.service.js
 */

angular.module("braintrain")
    .factory("SuggestionsService", function ($q, $timeout) {

        var SuggestionService = {},
            suggestionFBRef = new Firebase("https://rasng.firebaseio.com/suggestions");

        suggestionFBRef.on("value", function (data) {
            SuggestionService.data = data.val() || [];
        });

        SuggestionService.submitSuggestion = function (suggestion) {
            var defer = $q.defer();
            suggestionFBRef.push(suggestion);
            $timeout(function () {
                defer.resolve(SuggestionService.data);
            }, 100);
            return defer.promise;
        }

        return SuggestionService;
    });
