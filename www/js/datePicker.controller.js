app.controller('DatePickerController', function($rootScope, $scope, $routeParams, $location) {

    $scope.start = new Date();
    $scope.start.setHours(0, 0, 0, 0);

    $scope.end = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    $scope.end.setHours(0, 0, 0, 0);

    $scope.$watch(function() {
        return $scope.end - $scope.start;
    }, function(duration) {
        $scope.duration = duration / 1000 / 60 / 60 / 24;
    });

    $scope.validate = function() {

        var query = $routeParams.query || "";

        $location.url("/find-product?mode=request&category=" + encodeURIComponent($routeParams.category) + "&query=" + encodeURIComponent(query) + "&emergency=false");

    };

});
