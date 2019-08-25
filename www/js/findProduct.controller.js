app.controller('FindProductController', function($rootScope, $scope, $routeParams, $mdDialog, $mdToast, $location) {

    $scope.query = $routeParams.query || "";

    $scope.getUserById = function(userId) {

        return $rootScope.data.profil.find(function(profil) {
            return profil.id == userId;
        });

    };

    $scope.search = function() {

        var results = [];

        for (var o in $rootScope.data.objets) {

            var objet = $rootScope.data.objets[o];

            if (objet.type == $routeParams.category && objet.idProprietaire != 0 && objet.nom.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) {

                results.push(objet);
            }

        }

        return results;

    };

    $scope.randomDistance = ["500m", "1km", "200m", "1.5km", "6km", "900m", "1km"];

    $scope.filters = function() {

        var filters = [$routeParams.category];

        for (var filter in $rootScope.data.filters) {

            var filterValue = $rootScope.data.filters[filter];

            if (filterValue != null && filterValue != false) {
                filters.push(filterValue);
            }

        }

        return filters;
    }

    $scope.showSimpleToast = function(text) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(text)
            .position('bottom center')
            .hideDelay(3000)
        );
    };

	$scope.requestFor = function (objet, distance) {

		var id = $rootScope.data.demandes.length;

		$rootScope.data.demandes.push({
			'id': id,
			'idProprietaire': objet.idProprietaire,
			'idObjet': objet.id,
			'idDemandeur': 0,
			'distance': distance,
			'dateDemande': getNow().date,
			'heureDemande': getNow().time,
			'dateDebut': null,
			'dateFin': null,
			'statut': 'en attente',
			'chat': [{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, je souhaiterais vous emprunter votre " + objet.nom + " si cela vous est possible."
			}
		]});

		$scope.showSimpleToast("Votre demande a bien été envoyée");

		$location.url('/');

	};

    $scope.broadcast = function() {

        var prompt = $mdDialog.prompt({
            title: 'Diffuser une demande',
            htmlContent: "Entrer le <b>nom de l'objet</b> que vous rechercher au près des autres utilisateurs.",
            placeholder: "Nom de l'objet",
            initialValue: $scope.query,
            ok: 'Diffuser',
            cancel: 'Annuler'
        });

        $mdDialog
            .show(prompt)
            .then(function(name) {

                var d = new Date();

                var date = d.getDate() + "/" + d.getMonth() + "/" + d.getYear();
                var hour = d.getHours() + "h" + d.getMinutes();

                $rootScope.data.demandes.push({
                    'id': $rootScope.data.demandes.length,
                    'idProprietaire': null,
                    'idObjet': null,
                    'nomObjet': name,
                    'idDemandeur': 0,
                    'distance': '500 m',
                    'dateDemande': getNow().date,
                    'heureDemande': getNow().time,
                    'dateDebut': null,
                    'dateFin': null,
                    'statut': 'en attente',
                    'chat': [],
                    'historique': [{
                        'action': 'Demande de prêt reçue',
                        'date': getNow().date,
                        'heure': getNow().time
                    }]
                });

                $scope.showSimpleToast("Votre demande a bien été diffusée");

                $location.url("/");
            })
            .catch(function() {
                //VOID
            });

    };

});
