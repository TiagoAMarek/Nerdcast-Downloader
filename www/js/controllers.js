(function(){
    'use strict';

    angular.module('NerdCast.controllers', [])

    .controller('Header', function($scope, Header){
        $scope.header = Header.all();
    })

    .controller('DashCtrl', function($scope, Casts) {
        new Promise( function (resolve, reject) {
                Casts.request(resolve, reject);
            })
        .then(function(data){
            $scope.casts = data;
        });
    })

    .controller('ConfigCtrl', function($scope) {
        $scope.settings = [{
            enableFriends: true
        }];
    });
})();
