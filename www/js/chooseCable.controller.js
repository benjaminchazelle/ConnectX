app.controller('ChooseCableController', function($rootScope, $scope, $routeParams, $location) {

    $scope.img_gauche = "img/cables/DVI.png";
    $scope.img_droite = "img/cables/HDMI.png";

    $scope.nom_gauche = "DVI";
    $scope.nom_droite = "HDMI";

    $scope.modifiedEmbout = "embout-gauche";

    $scope.ChangeEmboutSelectionne = function(item) {
        if ($scope.modifiedEmbout === "embout-gauche") {
            $scope.img_gauche = item.image;
            $scope.nom_gauche = item.nom;
        } else if ($scope.modifiedEmbout === "embout-droite") {
            $scope.img_droite = item.image;
            $scope.nom_droite = item.nom;
        }
    }

    $scope.SelectionneEmbout = function(embout) {
        if (embout === "embout-gauche") {
            $scope.modifiedEmbout = embout;
        } else if (embout === "embout-droite") {
            $scope.modifiedEmbout = embout;
        }

    }

    $scope.validate = function() {

        if ($routeParams.mode == "request") {

            if ($routeParams.emergency == "true") {
                $location.url("/find-product?mode=" + $routeParams.mode + "&category=" + encodeURIComponent("Câble/adaptateur") + "&query=" + encodeURIComponent("Câble " + $scope.nom_gauche + " " + $scope.nom_droite) + "&emergency=" + $routeParams.emergency);
            } else {
                $location.url('/date-picker?category=' + encodeURIComponent("Câble/adaptateur") + "&query=" + encodeURIComponent("Câble " + $scope.nom_gauche + " " + $scope.nom_droite) + "&emergency=false");
            }

        } else if ($routeParams.mode == "loan") {

            $location.url("/edit-produit?idProduit=-1&category=" + encodeURIComponent("Câble/adaptateur") + "&nom=" + encodeURIComponent("Câble " + $scope.nom_gauche + " " + $scope.nom_droite));

        }

    };

});
