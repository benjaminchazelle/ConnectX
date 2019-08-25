app.controller('ProfilController', function($rootScope, $scope, $mdDialog, $mdToast, $routeParams) {

    $scope.customFullscreen = false;

    $scope.chooseImage = function(fileURI) {

        $rootScope.data.profil[0].avatar = fileURI;

        $scope.$apply();
    }

    $scope.showSimpleToast = function(text) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(text)
            .position('bottom center')
            .hideDelay(3000)
        );
    };

    $scope.changeInformation = function() {




        var prompt = $mdDialog.prompt({
            title: 'Changer votre résumé',
            htmlContent: "Entrer votre <b>résumé</b> public.",
            placeholder: "Votre description",
            initialValue: $rootScope.data.profil[0].infos,
            ok: 'Enregistrer',
            cancel: 'Annuler'
        });

        $mdDialog
            .show(prompt)
            .then(function(infos) {

                $rootScope.data.profil[0].infos = infos;

                $scope.showSimpleToast("Description mises à jour");

            }).catch(function() {});

    };

    $scope.deleteObject = function(ev, objet) {

        var confirm = $mdDialog.confirm()
            .title('Êtes-vous sûr de supprimer cet objet?')
            .textContent('Son historique, ses informations et la possibilité de le prêter seront perdus.')
            .ariaLabel('Validation')
            .targetEvent(ev)
            .ok('Supprimer')
            .cancel('Annuler');

        $mdDialog.show(confirm).then(function() {

            var index = $rootScope.data.objets.findIndex(function(obj) {
                return obj.id == objet.id;
            });

            $rootScope.data.objets.splice(index, 1);

            $scope.status = 'Votre objet a été supprimé.';
            $scope.showSimpleToast("Objet supprimé");
        }, function() {
            $scope.status = 'Votre objet a été conservé.';
            $scope.showSimpleToast("Objet conservé");
        });

    };

});
