'use strict';

var controllers = angular.module('NerdCast.controllers', []);

controllers.controller('DashCtrl', function($scope, Casts) {
    var promise = Casts.request();
    promise.then(function(data){
        $scope.casts = data;
        console.log(data);
    });
});

controllers.controller('Header', function($scope, Header){
    $scope.header = Header.all();
});

controllers.controller('SearchCtrl', function($scope, Casts) {
    $scope.found = Casts.search('Profissão');
    console.log($scope.found);
});
