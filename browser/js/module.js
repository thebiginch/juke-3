

var juke = angular.module('juke', ['ui.router']);


juke.run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

        throw error;

    });

}]);