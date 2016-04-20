angular.module("nameMaker", ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){

      $urlRouterProvider.otherwise('');

      $stateProvider
        .state("home", {
          url: '',
          templateUrl: "routes/generatorTem.html",
          controller: "genCtrl"
        })
        .state("notes", {
          url: "/notes",
          templateUrl: "routes/notesTem.html",
          controller: "notesCtrl"
        })
        .state("advanced", {
          url: "/advanced",
          templateUrl: "routes/advancedTem.html",
          controller: "advancedCtrl"
        })
    });
