angular.module('NerdCast.controllers', [])

.controller('Header', function($scope, Header){
    $scope.header = Header.all();
})

.controller('DashCtrl', function($scope, Casts) {

    $scope.casts = Casts.all();
})

.controller('ConfigCtrl', function($scope) {
    $scope.settings = [{
        enableFriends: true
    }];
});
