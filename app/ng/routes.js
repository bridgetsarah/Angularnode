//defining routes for posts page, register page, and login page

angular.module('app')
.config(function ($routeProvider){
    $routeProvider
    .when('/', { controller: 'Postsctrl', templateUrl: 'posts.html' })
    .when('/register', {controller: 'registerCtrl', templateUrl: 'register.html' })
    .when('login', {controller: 'LoginCtrl', templateUrl: 'login.html' })
})