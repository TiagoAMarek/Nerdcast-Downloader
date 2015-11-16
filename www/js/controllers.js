'use strict';

var controllers = angular.module('NerdCast.controllers', []);

controllers.controller('DashCtrl', function($scope, Casts) {
    var promise = Casts.request();
    promise.then(function(data){
        $scope.casts = data;
    });
});

controllers.controller('Header', function($scope, Header){
    $scope.header = Header.all();
});

controllers.controller('SearchCtrl', function($scope, Casts) {
    var search = document.getElementById("search");
    $scope.keyPress = function keyPress (e) {
        $scope.founds = Casts.search(search.value);
    }
});
