app.controller('HomeController', function($rootScope, $scope, $location, $mdToast) {

    $scope.about = function(demande) {

        if (demande.statut == 'acceptée' || demande.statut == 'en attente') {

            $location.url("/detail-echange?idDemande=" + demande.id);

        } else {

			$scope.showSimpleToast("Vous ne pouvez plus consulter la demande");

		}

    };

	$scope.showSimpleToast = function(text) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(text)
            .position('bottom center')
            .hideDelay(3000)
        );
    };

    $scope.chat = function(demande) {

        $location.url("/chat?idDemande=" + demande.id);

    };

    $scope.ajouterObjet = function(demande) {

        $location.url("/choose-category?mode=loan");

    };

    $scope.demander = function(demande) {

        $location.url("/choose-category?mode=request");

    };

});
