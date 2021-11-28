
// var myApp = angular.module('myModule', []);


// myApp.controller("myController", function ($scope) {
//     var employee = {
//         firstName: "Pratik", lastName: "Jare", age: 25, gender: 'male'
//     }
//     $scope.employee = employee;
// });


var myApp = angular
    .module('myModule', [])
    .controller("myController", function ($scope) {
        var employee = {
            firstName: "Pratik", lastName: "Jare", age: 25, gender: 'male'
        }
        $scope.employee = employee;
    });