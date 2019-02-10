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
// websockets post ws function - p134 - remove unshift function if posts appear twice!!
$scope.$on('ws:new_post', function (_, post){
    $scope.$apply(function (){
        $scope.posts.unshift(post)
    })
})

PostsSvc.fetch().success(function (posts){
    $scope.posts = posts
  })
  