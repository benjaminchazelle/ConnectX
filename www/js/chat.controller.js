app.controller('BottomSheetExample', function($scope, $rootScope, $mdBottomSheet, $routeParams, $location) {

    $scope.demande = $rootScope.data.demandes.find(function(element) {
        return element.id == $routeParams.idDemande;
    });

	console.log($scope.demande )

    $scope.objet = $rootScope.data.objets.find(function(element) {
        return element.id == $scope.demande.idObjet;
    });


    $scope.profilOwner = $rootScope.data.profil.find(function(element) {
        return element.id == $scope.demande.idProprietaire;
    });

    $scope.profilRequester = $rootScope.data.profil.find(function(element) {
        return element.id == $scope.demande.idDemandeur;
    });

	$scope.openDetails = function () {
		$location.url("/detail-echange?idDemande=" + $scope.demande.id);
	};

    $scope.addMessage = function() {

        var message = $scope.message.trim();

        $scope.message = "";

        if (message.trim().length > 0) {

            $scope.demande.chat.push({
                type: "requester",
                content: message
            });

        }
    };

    $scope.showGridBottomSheet = function() {
        $mdBottomSheet.show({
            templateUrl: 'pages/bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            clickOutsideToClose: true,
            locals: {
                demande: $scope.demande,
                objet: $scope.objet
            }
        }).then(function(clickedItem) {

        }).catch(function(error) {

        });
    };

})

app.controller('GridBottomSheetCtrl', function($scope, demande, objet, $mdBottomSheet, $location) {

    $scope.demande = demande;
    $scope.objet = objet;

	$scope.demandeStatut = $scope.demande.statut;

	$scope.refuserDemande = function () {
		$scope.demande.statut = "refusée";
		$scope.demande.dateFin = getNow().date;
		$scope.demande.heureFin = getNow().time;
		$location.url("detail-echange?idDemande=" + $scope.demande.id);
	};

	$scope.accepterDemande = function () {
		$scope.demande.statut = "acceptée";
		$scope.demande.dateDebut = getNow().date;
		$scope.demande.heureDebut = getNow().time;
		$scope.demande.chat.push({
			type: "center",
			content: "end"
		});
	};

	$scope.terminerDemande = function () {
		$scope.demande.statut = "terminée";
		$scope.demande.statut.dateFin = getNow().date;
		$scope.demande.statut.heureFin = getNow().time;
		$location.url("detail-echange?idDemande=" + $scope.demande.id);
	};

	$scope.hide = function () {
		$mdBottomSheet.hide();
	};

})
