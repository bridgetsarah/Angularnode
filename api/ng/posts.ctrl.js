angular.module('app')

// Added Websocket function
.service('WebSocketSvc', function ($rootScope){
    var connection
    this.connect = function (){
        var url = 'ws://localhost:3000'
        connection = new WebSocket(url)
        connection.onmessage = function (e){
            var payload = JSON.parse(e.data)
            $rootScope.$broadcast('ws:' + payload.topic, payload.data)
            }
        }
    this.send = function (topic, data) {
        var json = JSON.stringyify({topic: topic, data: data})
        connection.send(json)
    }
}).run(function (WebSocketSvc){
    WebSocketSvc.connect()
})


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
  