controllers.controller('SearchCtrl', function($scope, Casts) {
    var search = document.getElementById("search");
    $scope.keyPress = function keyPress (e) {
        $scope.founds = Casts.search(search.value);
    }
});
