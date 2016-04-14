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
        .state("generator", {
          url: "/generator",
          templateUrl: "routes/generatorTem.html"
        })
    });
