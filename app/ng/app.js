// api/ng/app.js

var app = angular.module('app', [])

    // PostsController Module & Dependency Inject Scope

     app.controller('PostsCtrl', function ($scope, PostsSvc) {
        $scope.addpost = function () {                  // the function runs when the "add post" button is clicked   
         if ($scope.postBody) {
             PostsSvc.create({                    
              username: 'bridgetsarah',
              body: $scope.postBody
          }).success(function (post){
              $scope.posts.unshift(post)
              $scope.postBody = null
          })
         }
        }
// new Posts SVC section
    PostsSvc.fetch().success(function (posts) {
    $scope.posts = posts    
})


//Defining service on app below
    app.service('PostsSvc', function ($http) {
        this.fetch = function () {
            return $http.get('/api/posts')
        }
    })    
    this.create = function (post) {
        return $http.get('.api/posts',post)
    }
})
