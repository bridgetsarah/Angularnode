// Api/ng/user.svc.js file
angular.module('app')
.service('UserSvc', function($http){    ///User Service
    var svc = this
    svc.getUser = function (){
        return $http.get('/api/users')
        .then(function (response){
            return response.data
        })
    }
svc.login = function (username, password){  // Login services
    return $http.post('/api/sessions', {
        username: username, password: password
    }).then(function (val) {
        svc.token = response.data
        $http.defaults.header.common['X-Auth'] = response.data
        return svc.getUser()
    })
  }
})

svc.register = function (username, password) {
    return $http.post('/api/users', {
        username: username, password: password
    }).then(function (){
        return svc.login(username, password)
    })
}
