(function () {
    'use strict';

    angular
        .module('watsonDemoApp')
        .config(['$locationProvider', '$routeProvider', '$httpProvider',
            function ($locationProvider, $routeProvider, $httpProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/home.html',
                        controller: 'MainController'
                    })
                    .otherwise({
                        redirectTo: '/',
                        controller: 'MainController'
                    });
                $locationProvider.html5Mode(true);
            }]);
})();
