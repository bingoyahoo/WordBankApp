/**
 *
 * Created by delvinlow on 4/5/16.
 */

var app = angular.module("WordBank", []);

app.controller("MainCtrl", ["$scope", function($scope){
    $scope.testVariable = 8;
    $scope.newEntry = "";
    $scope.newDefinition = "";

    $scope.terms = [
        {"word": "camaraderie", "definition": "comradeship; good-fellowship." },
        {"word": "venison", "definition": "the flesh of a deer or similar animal as used for food."},
        {"word": "assuage", "definition": "to appease; satisfy; allay; relieve"},
        {"word": "gnarled", "definition": "contorted, distorted"},
        {"word": "imperative", "definition": "absolutely necessary"}
    ];
    $scope.orderProp = "word";

    $scope.addTerm = function(){
        if ($scope.newEntry === "" || !$scope.newEntry ||$scope.newDefinition === "" || !$scope.newDefinition) {
            return;
        }
        $scope.terms.push({"word": $scope.newEntry, "definition": $scope.newDefinition});
        $scope.newEntry = "";
        $scope.newDefinition = "";
    };
}]);
