var myApp = angular
    .module("myModule", [])
    .controller("myController1", function ($scope) {
        var technoligies = [
            { name: "Java", likes: 0, dislikes: 0 },
            { name: "React", likes: 0, dislikes: 0 },
            { name: "Angular", likes: 0, dislikes: 0 },
            { name: "Vue", likes: 0, dislikes: 0 },
            { name: "Express", likes: 0, dislikes: 0 },

        ]
        $scope.technoligies = technoligies

        $scope.incrementlikes = function (tech) {
            tech.likes++;
        }

        $scope.decrementlikes = function (tech) {
            tech.dislikes++;
        }
    })