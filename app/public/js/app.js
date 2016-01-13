'use strict';

var angular = require('angular');

/*** All dependencies here ***/
var ui_router = require('angular-ui-router');
var ui_bootstrap = require('angular-ui-bootstrap');

/*** All controllers here ***/
var NavbarCtrl = require('./controllers/navbarCtrl');

/*** All services here ***/


/*** All directives here ***/
var FocusMeDir = require('./directives/FocusMeDir');

var app = angular.module('menu-app', [ui_router, ui_bootstrap]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        url: '/',
        views: {
            'navbar': {
                templateUrl: 'views/navbar.html',
                controller: 'NavbarCtrl'
            },
            'content': {
                templateUrl: 'views/home.html'
            },
            'footer': {
                templateUrl: 'views/footer.html'
            }
        }
    });
});

app.controller('NavbarCtrl', ['$scope', NavbarCtrl]);

app.directive('focusMe', [FocusMeDir]);
