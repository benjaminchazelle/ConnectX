app.controller('ProductDetailsController', function($rootScope, $scope, $routeParams) {

    $scope.object = $rootScope.data.objets.find(function(objet) {
        return objet.id == $routeParams.id
    });

    $scope.getUserById = function(userId) {

        return $rootScope.data.profil.find(function(profil) {
            return profil.id == userId;
        });

    };

    $scope.getIconFromAction = function(action) {

        switch (action) {
            case "Demande de prêt reçue":
                return "img/icons/call_received_white.svg";

            case "Prêt refusé":
                return "img/icons/close_white.svg";

            case "Prêt accepté":
                return "img/icons/check_white.svg";

            case "Début du prêt":
                return "img/icons/play_arrow_white.svg";

            case "Fin du prêt":
                return "img/icons/end_white.svg";
        }

    };
});
