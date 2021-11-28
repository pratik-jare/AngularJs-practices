 
var myApp = angular
    .module('myModule', [])
    .controller("myController", function ($scope) {
        var images = {
            name: "one",
            index: 1,
            image:'./Images/1_img.jpg'
        }
         
        $scope.images = images;
    });