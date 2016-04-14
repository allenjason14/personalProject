angular.module("nameMaker", ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){

      $stateProvider
        .state("home", {
          url: '',
          templateUrl: "routes/homeTem.html"
        })
        .state("notes", {
          url: "/notes",
          templateUrl: "routes/notesTem.html"
        })
        .state("adv", {
          url: "/advanced",
          templateUrl: "routes/advTem.html"
        })
    });
