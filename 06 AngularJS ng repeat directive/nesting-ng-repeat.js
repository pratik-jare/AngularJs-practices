
var myApp = angular
    .module('myModule', [])
    .controller("myController", function ($scope) {
        var nameplaces = [{
            name: 'pratik',
            places: [
                { name: 'satara' },
                { name: 'pune' },
                { name: 'mumbai' },
            ]
        }, {
            name: 'amit',
            places: [
                { name: 'satara' },
                { name: 'pune' },
                { name: 'delhi' }, 
            ]
        }]
        $scope.nameplaces = nameplaces;
    });