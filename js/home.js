var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "./html/user/main.html"
    })
    .when("/category", {
      templateUrl: "./html/user/listBooks.html"

    })
    .when("/history", {
      templateUrl: "./html/user/historyRead.html"

    })
    .when("/favorite", {
      templateUrl: "./html/user/favoriteBooks.html",
    })
    .when("/detailsBook", {
      templateUrl: "./html/user/bookDetails.html",
    })
    .when("/login", {
      templateUrl: "./html/account/login.html",
    })
    .when("/register", {
      templateUrl: "./html/account/register.html",
    })
    .when("/updateProfile", {
      templateUrl: "./html/account/updateProfile.html",
    })
    .when("/changePass", {
      templateUrl: "./html/account/changePass.html",
    })
    .when("/postBook",{
      templateUrl: "./html/user/postBooks.html",
    })
    .otherwise({
      redirectTo: "/home"
    })

  });