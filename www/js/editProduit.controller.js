app.controller('editProduitController', function($rootScope, $scope, $routeParams, $location, $mdToast) {

    $scope.chooseImage = function(fileURI) {

        $scope.produit.image = fileURI;

        $scope.$apply();
    }

	//Récupération de l'id produit par la requête get
    $scope.idProduit = parseInt($routeParams.idProduit, 10);

    if ($routeParams.idProduit >= 0) {
        //Note : il faudrait filtrer ici (contre injections)

        //On fait une "copie locale" du produit en mémoire
        $scope.produit = {
            'id': $rootScope.data.objets[$scope.idProduit].id,
            'type': $rootScope.data.objets[$scope.idProduit].type,
            'nom': $rootScope.data.objets[$scope.idProduit].nom,
            'infos': $rootScope.data.objets[$scope.idProduit].infos,
            'statutType': $rootScope.data.objets[$scope.idProduit].statutType,
            'statutPret': $rootScope.data.objets[$scope.idProduit].statutPret,
            'nbPrets': $rootScope.data.objets[$scope.idProduit].nbPrets,
            'dateMiseEnLigne': $rootScope.data.objets[$scope.idProduit].dateMiseEnLigne,
            'prix': $rootScope.data.objets[$scope.idProduit].prix,
            'devise': $rootScope.data.objets[$scope.idProduit].devise,
            'prixType': $rootScope.data.objets[$scope.idProduit].prixType,
            'image': $rootScope.data.objets[$scope.idProduit].image
        };

    } else {

        var date = getNow().date;

        var type = $routeParams.category || 'Autre';

        switch (type) {
            case "Imprimante":
                image = 'img/icons/print_black.svg';
                break;
            case "Chargeur":
                image = 'img/icons/ic_flash_on_black_24px.svg';
                break;
            case "Batterie":
                image = 'img/icons/ic_battery_charging_full_black_24px.svg';
                break;
            case "Câble/adaptateur":
                image = 'img/icons/usb_black.svg';
                break;
            case "Matériel audio":
                image = 'img/icons/headset.svg';
                break;
            default:
                image = 'img/icons/devices_other.svg';
        }

        $scope.produit = {
            'id': null,
            'type': type,
            'nom': $routeParams.nom || "",
            'infos': "",
            'statutType': "Gratuit",
            'statutPret': "disponible",
            'nbPrets': '0',
            'dateMiseEnLigne': date,
            'prix': 0,
            'devise': '€',
            'prixType': '/prêt',
            'image': image
        };

    }

    $scope.showSimpleToast = function(text) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(text)
            .position('bottom center')
            .hideDelay(3000)
        );
    };

    $scope.submit = function() {

        //Vérification si le form est valide = correctement rempli
        if ($scope.editForm.$valid) {
            $scope.editForm.$setSubmitted();

            var added = $scope.produit.id == null;

            if (added) {
                $scope.idProduit = $rootScope.data.objets.length;
                $scope.produit.id = $rootScope.data.objets.length;
                $rootScope.data.objets[$scope.idProduit] = {};
                $rootScope.data.objets[$scope.idProduit].idProprietaire = 0;
            }

            //On recopie l'objet local dans la mémoire
            $rootScope.data.objets[$scope.idProduit].id = $scope.produit.id;
            $rootScope.data.objets[$scope.idProduit].type = $scope.produit.type;
            $rootScope.data.objets[$scope.idProduit].nom = $scope.produit.nom;
            $rootScope.data.objets[$scope.idProduit].infos = $scope.produit.infos;
            $rootScope.data.objets[$scope.idProduit].statutType = $scope.produit.statutType;
            $rootScope.data.objets[$scope.idProduit].statutPret = $scope.produit.statutPret;
            $rootScope.data.objets[$scope.idProduit].nbPrets = $scope.produit.nbPrets;
            $rootScope.data.objets[$scope.idProduit].dateMiseEnLigne = $scope.produit.dateMiseEnLigne;
            $rootScope.data.objets[$scope.idProduit].prix = $scope.produit.prix;
            $rootScope.data.objets[$scope.idProduit].devise = $scope.produit.devise;
            $rootScope.data.objets[$scope.idProduit].prixType = $scope.produit.prixType;
            $rootScope.data.objets[$scope.idProduit].image = $scope.produit.image;

            if (added) {
                $scope.showSimpleToast("Objet ajouté");
            } else {
                $scope.showSimpleToast("Objet mis à jour");
            }

            $location.url("profil");

        } else {
            $scope.showSimpleToast("Informations non valides !");
        }

    }
});
