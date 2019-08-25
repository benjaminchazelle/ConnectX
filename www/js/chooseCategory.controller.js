app.controller('ChosseCategoryController', function($rootScope, $scope, $routeParams, $location) {

    if ($routeParams.mode == "loan") {

        $scope.mode = "loan";

    } else if ($routeParams.mode == "request") {

        $scope.mode = "request";
        $scope.emergency = $rootScope.data.settings.modeUrgence;

    }

    $scope.chooseCategory = function(category) {

        if ($scope.mode == "request") {

            if (category == "Câble/adaptateur") {
                $location.url('/choose-cable?mode=' + $scope.mode + "&emergency=" + $scope.emergency);
            } else {
                if ($scope.emergency) {
                    $location.url('/find-product?category=' + encodeURIComponent(category) + "&emergency=true");
                } else {
                    $location.url('/date-picker?category=' + encodeURIComponent(category) + "&emergency=false");
                }

            }

        } else if ($scope.mode == "loan") {

            if (category == "Câble/adaptateur") {
                $location.url('/choose-cable?mode=' + $scope.mode);
            } else {
                $location.url('/edit-produit?idProduit=-1&category=' + encodeURIComponent(category));
            }

        }

    }

});
