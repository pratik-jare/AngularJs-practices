
var myApp = angular
    .module('myModule', [])
    .controller("myController", function ($scope) {
        var name = "Pratik";
        $scope.name = name;


        var emp = {
            firstname:'pratik',
            lastname:'jare',
            age:25
        }
        $scope.emp = emp;
    });