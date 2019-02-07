// api/assets/app.js

var app = angular.module('app', [])

    // PostsController Module & Dependency Inject Scope

     app.controller('PostsCtrl', function ($scope, $http) {
        $scope.addpost = function () {                  // the function runs when the "add post" button is clicked   
         if ($scope.postBody) {                         // only add a post if there is a body                      
          $http.post('/api/posts', {
              username: 'bridgetsarah',
              body: $scope.postBody
          }).success(function (post){
              $scope.posts.unshift(post)
              $scope.postBody = null
          })
         }
        }

        // new HTTP section
        $http.get('/api/posts').success(function (posts) {
            $scope.posts = posts
        })
        })