angular.module('App').config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

    //$urlRouterProvider.when('/', '/');
    $urlRouterProvider.otherwise("/page-not-found");

    var controller = ['$scope', '$rootScope', 'bg', function (scope, rootScope, bg) {
        var self = this;
        this.scope = scope;

        rootScope.bg = bg;
    }];

    $stateProvider
        .state('intro', {
            url: "/",
            template: "<div>Intro</div>",
            onEnter: function () {
                window.location = "/";
            }
        })
        .state('home', {
            url: "/home",
            templateUrl: "pages/home/home.html",
            resolve: {
                bg: function () { return '8'; }
            },
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .state('doi', {
            abstract: true,
            url: "/doi",
            templateUrl: "pages/doi/doi.html",
            resolve: {
                bg: function () { return '1'; }
            },
            controller: 'DoiMenuCtrl',
            controllerAs: 'doi'
        })
        .state('doi.province', {
            url: "/:province/:bg",
            templateUrl: 'pages/doi/province.html',
            resolve: {
                bg: function () { return '1'; }
            },
            controller: 'DoiCtrl',
            controllerAs: 'map'
        })
        .state('people', {
            url: "/people",
            templateUrl: 'pages/people/people.html',
            resolve: {
                bg: function () { return '2'; }
            },
            controller: 'PeopleCtrl',
            controllerAs: 'people'
        })
        .state('people.tribe', {
            url: "/:tribe/:bg",
            templateUrl: 'pages/people/tribe.html',
            resolve: {
                bg: function () { return '2'; }
            },
            controller: 'TribeCtrl',
            controllerAs: 'tribe'
        })
        .state('explore', {
            url: "/explore",
            templateUrl: "pages/explore/explore.html",
            resolve: {
                bg: function () { return '3'; }
            },
            controller: 'ExploreCtrl',
            controllerAs: 'explore'
        })
        .state('about', {
            url: "/about",
            templateUrl: "pages/about/about.html",
            resolve: {
                bg: function () { return '4'; }
            },
            controller: controller
        })
        .state('account', {
            url: "/account",
            templateUrl: "pages/account/account.html",
            resolve: {
                bg: function () { return '5'; }
            },
            controller: 'AccountCtrl',
            controllerAs: 'account'
        });
    $locationProvider.html5Mode(true);
    //----- Theme -----
    $mdThemingProvider.definePalette('tidtor', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': '252a5a',    // hue-1
        '400': 'ef5350',
        '500': 'rgb(23,64,112)',    // primary, navbar
        '600': 'e53935',
        '700': 'd32f2f',
        '800': '1b2052',    // hue-2
        '900': 'b71c1c',
        'A100': 'ffffff',   // hue-3
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        'contrastDarkColors': ['50', '100', '200', '400'], // button color will set to white
        'contrastLightColors': undefined    // button color will set to black
    });
    $mdThemingProvider.theme('default').primaryPalette('tidtor', {
        'default': '500',
        'hue-1': '300',
        'hue-2': '800',
        'hue-3': 'A100'
    });
});