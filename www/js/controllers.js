'use strict';

var controllers = angular.module('NerdCast.controllers', []);

controllers.controller('ConfigCtrl', function($scope) {
    $scope.settings = [{
        enableFriends: true
    }];
});

controllers.controller('DashCtrl', function($scope, Casts) {
    var promise = Casts.request();
    promise.then(function(data){
        $scope.casts = data;
    });
});

controllers.controller('Header', function($scope, Header){
    $scope.header = Header.all();
});
