angular.module('wattReads', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state("home", {
          url: '/',
          templateUrl: "routes/homeTem.html",
          // controller: "homeCtrl"
        })
        .state("newpage", {
          url: "/new",
          templateUrl: "routes/newPageTem.html",
          // controller: "choicePageCtrl"
        })
        .state("info", {
          url: "/info",
          templateUrl: "routes/infoPageTem.html",
          // controller: "infoPageCtrl"
        })
          .state("login", {
            url: "/login",
            templateUrl: "routes/loginTem.html",
            // controller: "logInCtrl"
          })
          .state("wikipage", {
            url: "/wikipage",
            templateUrl: "routes/wikiPageTem.html",
            // controller: "mainCtrl"
          })
    });
