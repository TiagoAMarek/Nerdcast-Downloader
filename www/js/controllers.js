angular.module('NerdCast.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ConfigCtrl', function($scope) {
    $scope.settings = [{
        enableFriends: true
    }];
});
