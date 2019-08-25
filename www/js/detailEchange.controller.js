app.controller('detailEchangeController', function($rootScope, $scope, $routeParams, $location) {

    if ($routeParams.idDemande == 42) {
        $scope.idDemande = 1;
        $scope.isSpecial = 1;
        if ($routeParams.idObjet == undefined) {
            $scope.idObjet = 7;
        } else {
            $scope.idObjet = $routeParams.idObjet;
        }

    } else if ($routeParams.idDemande >= 0) {
        $scope.idDemande = $routeParams.idDemande;
        $scope.isSpecial = 0;
    } else if ($routeParams.idDemande == undefined) {
        alert("Erreur : aucun numéro de demande n'a été spécifié. Contactez l'adminsitrateur");
    }

    if ($rootScope.data.demandes[$scope.idDemande].statut == 'terminée' || $rootScope.data.demandes[$scope.idDemande].statut == 'refusée') {
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = "md-icon#chatIcon svg{fill: #808080;} #chat{color: #808080;}";
        document.body.appendChild(css);
    } else {
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = "md-icon#chatIcon svg{fill: #000000;} #chat{color: #000000;}";
        document.body.appendChild(css);
    }

    $scope.checkDemandeurOuPreteur = function(idDemande) {
        if ($rootScope.data.demandes[idDemande].idProprietaire == 0) {
            return ["Demandeur"];
        } else {
            return ["Prêteur"];
        }
    };

	$scope.openChat = function (idDemande) {

		$location.url("/chat?idDemande=" + idDemande);

	};

	$scope.refuserDemande = function (idDemande) {
		$rootScope.data.demandes[idDemande].statut = "refusée";
		$rootScope.data.demandes[idDemande].dateFin = getNow().date;
		$rootScope.data.demandes[idDemande].heureFin = getNow().time;
	};

	$scope.accepterDemande = function (idDemande) {
		$rootScope.data.demandes[idDemande].statut = "acceptée";
		$rootScope.data.demandes[idDemande].chat.push({
			type: "center",
			content: "end"
		});
		$rootScope.data.demandes[idDemande].dateDebut = getNow().date;
		$rootScope.data.demandes[idDemande].heureDebut = getNow().time;
	};

	$scope.terminerDemande = function (idDemande) {
		$rootScope.data.demandes[idDemande].statut = "terminée";
		$rootScope.data.demandes[idDemande].dateFin = getNow().date;
		$rootScope.data.demandes[idDemande].heureFin = getNow().time;
	};

	$scope.getOther = function(idDemande) {

		if($rootScope.data.demandes[idDemande].idDemandeur == 0) {
			return {
				"id" : $rootScope.data.demandes[idDemande].idProprietaire,
				"role" : "Prêteur",
			};
		} else {
			return {
				"id" : $rootScope.data.demandes[idDemande].idDemandeur,
				"role" : "Demandeur",
			};
		};
		//return $rootScope.data.demandes[idDemande].idDemandeur == 0 ? "Prêteur" : "Demandeur";
	}

    $scope.getUsers = function(idDemande) {
        var result = $scope.checkDemandeurOuPreteur(idDemande);
        if (result == "Demandeur") {
            return $rootScope.data.profil[$rootScope.data.demandes[idDemande].idDemandeur];
        } else {
            return $rootScope.data.profil[$rootScope.data.demandes[idDemande].idProprietaire];
        }
    }

    $scope.calculateElapsedTime = function(idDemande) {
        var dateNow = new Date();
        var now = dateNow.getTime();

        var thenD = $rootScope.data.demandes[idDemande].dateDemande;
        var partsD = thenD.split("/", 3);

        var thenH = $rootScope.data.demandes[idDemande].heureDemande;
        var partsH = thenH.split("h", 2);

        var dateThen = new Date(partsD[2], partsD[1], partsD[0], partsH[0], partsH[1]);
        var then = dateThen.getTime();

        var tempsEcoule = now - then;
        var duration = convertMillisecondsToTime(tempsEcoule);
        if (duration[0] > 0) {
            return parseInt(duration[0]) + ' jours';
        } else if (duration[1] > 0) {
            return parseInt(duration[1]) + ' h';
        } else {
            return parseInt(duration[2]) + ' m';
        }
    };
});

function convertMillisecondsToTime(t) {
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor((t - d * cd) / ch),
        m = Math.round((t - d * cd - h * ch) / 60000),
        pad = function(n) {
            return n < 10 ? '0' + n : n;
        };
    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    return [d, pad(h), pad(m)];
};
