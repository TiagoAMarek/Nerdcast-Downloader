controllers.controller('SearchCtrl', function($scope, Casts) {
    $scope.found = Casts.search('Profissão');
    console.log($scope.found);
});
