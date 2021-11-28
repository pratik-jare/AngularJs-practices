
var myApp = angular
    .module('myModule', [])
    .controller("myController", function ($scope) {
        var employees = [
            {
                name: "Ohm", dateOfBirth: new Date("November 23, 1980"),
                gender: "Male", salary: 55000.788
            },
            {
                name: "Tawan", dateOfBirth: new Date("May 05, 1970"),
                gender: "male", salary: 68000
            },
            {
                name: "Nannon", dateOfBirth: new Date("August 15, 1974"),
                gender: "Male", salary: 57000
            },
            {
                name: "Pat", dateOfBirth: new Date("October 27, 1979"),
                gender: "Female", salary: 53000
            },
            {
                name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                gender: "Female", salary: 60000
            }

        ];

        $scope.employees = employees;
        $scope.sortColumn = 'name';
        $scope.revertSort = false;

        $scope.sortData = function (column) {
            $scope.revertSort = ($scope.sortColumn == column) ? !$scope.revertSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.revertSort ? 'arrow-down' : 'arrow-up'
            }
            return '';
        }
    });