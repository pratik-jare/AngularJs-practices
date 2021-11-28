
var myApp = angular
    .module('myModule', [])
    .controller("myController", function ($scope) {
        var technologies = [
            { name: 'c', likes: 0, dislike: 0 },
            { name: 'c++', likes: 0, dislike: 0 },
            { name: 'javascript', likes: 0, dislike: 0 },
            { name: 'angularjs', likes: 0, dislike: 0 },
            { name: 'reactjs', likes: 0, dislike: 0 },
        ];
        $scope.technologies = technologies;

        $scope.incrementLikes = function (technology) {
            technology.likes++
        }

        $scope.incrementDislikes = function (technology) {
            technology.dislike++
        }


    });