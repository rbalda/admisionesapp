// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var db = null;
var is_logged = false;
var app = angular.module('starter', ['ionic', 'ionic-material','ngCordova','lokijs']);

app.run(function ($ionicPlatform,$cordovaSQLite,Usuario,$state,$rootScope,$timeout) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }


        if(window.cordova) {
          // App syntax
          db = $cordovaSQLite.openDB({name:'addmisionesapp.db',location:'default'});
        } else {
          // Ionic serve syntax
          db = window.sqlitePlugin.openDatabase("myapp.db", "1.0", "My app", -1);
        }
        //var db = $cordovaSQLite.openDB({name:'addmisionesapp.db',location:'default'});
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS usuario (id integer primary key, nombres text, apellidos text)");

        $cordovaSQLite.execute(db,"SELECT * FROM usuario").then(function(res){
          //console.log("execute");
          console.log(res);
          if(res.rows.length==0){
            $timeout(function(){$state.go('login');});
          }
          else{
            $rootScope.usuario_global = {
              nombres: res.rows.item(0).nombres,
              apellidos: res.rows.item(0).apellidos
            }
          }
        },function(err){
          console.log("valgo");
        });
    });

    $rootScope.tiposEvaluacion = [
      "Deberes","Lecciones","Participacion","Proyectos","Examen"
    ]
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
        // onEnter: function($state){
        //   // console.log(Usuario.all().rows.length);
        //   if(!rootScope.is_logged){
        //     $state.go('login')
        //   }
        // }
    })
    // .state('app.login',{
    //   url:'/login',
    //   views: {
    //       'menuContent':{
    //         templateUrl:'templates/login.html',
    //         controller:'LoginCtrl'
    //       }
    //   }
    // })
    .state('login',{
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'LoginCtrl'
      })
      .state('app.materias', {
          url: '/materias',
          views: {
              'menuContent': {
                  templateUrl: 'templates/materialist.html',
                  controller: 'MateriasCtrl'
              }
          }
      })
      .state('app.materia', {
          url: '/materias/:id',
          views: {
              'menuContent': {
                  templateUrl: 'templates/materia-detail.html',
                  controller: 'MateriasDetailCtrl'
              }
          }
      })
      .state('app.tutorias', {
          url: '/tutorias',
          views: {
              'menuContent': {
                  templateUrl: 'templates/tutorias.html',
              }
          }
      })
      .state('app.asesorias', {
          url: '/asesorias',
          views: {
              'menuContent': {
                  templateUrl: 'templates/asesorias.html',
              }
          }
      })
      .state('app.clases', {
          url: '/clases',
          views: {
              'menuContent': {
                  templateUrl: 'templates/horarios.html',
              }
          }
      })
      .state('app.buses', {
          url: '/buses',
          views: {
              'menuContent': {
                  templateUrl: 'templates/buses.html',
              }
          }
      })
      .state('app.materialayuda', {
          url: '/material',
          views: {
              'menuContent': {
                  templateUrl: 'templates/materialayuda.html',
                  controller: 'MaterialAyudaCtrl'
              }
          }
      })
      .state('app.materialayudadetail', {
          url: '/material/:idMaterial',
          views: {
              'menuContent': {
                  templateUrl: 'templates/materialayudadetail.html',
                  controller: 'MaterialAyudaDetailCtrl'
              }
          }
      })
      .state('app.capitulodetail', {
          url: '/material/:idMaterial/:cap',
          views: {
              'menuContent': {
                  templateUrl: 'templates/capitulo.html',
                  controller: 'CapituloCtrl'
              }
          }
      })
      .state('app.home', {
          url: '/home',
          views: {
              'menuContent': {
                  templateUrl: 'templates/home.html'
              }
          }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
