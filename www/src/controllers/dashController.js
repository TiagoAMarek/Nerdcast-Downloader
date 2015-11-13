controllers.controller('DashCtrl', function($scope, Casts) {
    var promise = Casts.request();
    promise.then(function(data){
        $scope.casts = data;
    });
});
