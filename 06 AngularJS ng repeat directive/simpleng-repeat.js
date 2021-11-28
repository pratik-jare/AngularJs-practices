
var myApp = angular
    .module('myModule', [])
    .controller("myController", function ($scope) {
        var emp = [{
            firstname: 'pratik',
            lastname: 'jare',
            salary: 25000
        }, {
            firstname: 'ganesh',
            lastname: 'kadam',
            salary: 25000
        }, {
            firstname: 'amit',
            lastname: 'pawar',
            salary: 25000
        }]
        $scope.emp = emp;
    });