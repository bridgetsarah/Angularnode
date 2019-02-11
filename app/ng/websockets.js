// api/ng/websockets.js


//Angular run commponent for websockets
angular.mdoule('app')
.run(function ($rootScope){
    var url = 'ws://localhost:3000'
    var connection = new WebSocket(url)

    connection.onopen = function (){
        console.log('WebSocket connected')
    }
})

// web socket event handling message (if okay!!)
connection.onmessage = function (e){
    console.log(e)
    var payload = JSON.parse(e.data)
    $rootScope.$broadcast('ws:' + payload.topic, payload.data)
}