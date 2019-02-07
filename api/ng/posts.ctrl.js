angular.module('app')
.controller('postsCtrl', function ($scope, PostsSvc){
    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'bridgetsarah',
                body: $scope.postBody
            }).success(function (post){
                $scope.postBody = null
            })
        }
    }
})

PostsSvc.fetch().success(function (posts){
    $scope.posts = posts
  })
  