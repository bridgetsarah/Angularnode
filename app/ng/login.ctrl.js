// api/ng/login controller

angular.module('app')
    .controller('LoginCtrl', function ($scope, UserSvc, $location){
        $scope.login = function (username, password) {
            UserSvc.login(username, password)
            .then(function (user){
                $scope.$emit('login', user)
                $location.path('/')
                console.log(user)
            })
        }
    })