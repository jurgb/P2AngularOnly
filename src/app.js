var app = angular.module('MPDapp', ['ngMaterial', 'ngRoute'], function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
});
app.config(function($routeProvider, $mdThemingProvider) {

    $routeProvider
        .when('/',
            {
                controller: 'AppCtrl',
                templateUrl: './views/destinations.html'
            })
        .when('/login',
            {
                controller: 'AppCtrl',
                templateUrl: './views/login.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/edit/:TodID',
            {
                controller: 'AngTodoController',
                templateUrl: '/views/notificationsedit.html'
            })
    
     $mdThemingProvider.definePalette('mpdPalette', {
        '50': '48bebc', // blue color (accent)
        '100': '131921', // dark blue (sidenav)
        '200': 'efefef', // grey accent
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'ffffff', //used by default
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('mpdPalette', {
          'default': '200', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '100', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': '200' // use shade A100 for the <code>md-hue-3</code> class
        })
        .accentPalette('teal');
    });