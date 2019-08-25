app.controller('notificationsController', function($rootScope, $scope, $mdToast, $filter) {

    $scope.customFullscreen = false;

    $scope.tryBack = function() {

        if ($scope.getNotifications() == 0) {
            $rootScope.back();
        }

    };

    $scope.getNotifications = function() {
        return $filter("filter")($rootScope.data.demandes, function(demande) {
            return (demande.idProprietaire == 0 || demande.idProprietaire == null) && demande.statut == 'en attente';
        });
    };

    $scope.showRefuse = function(ev, idDemande) {
        $scope.status = 'Demande refusée.';
        $rootScope.data.demandes[idDemande].statut = 'refusée';

        var dateNow = new Date();
        var h = dateNow.getHours();
        var m = dateNow.getMinutes();
        var heure = h + 'h' + m;

        var y = dateNow.getYear();
        var mo = dateNow.getMonth();
        var d = dateNow.getDate();
        var date = d + '/' + mo + '/' + '20' + (y - 100);

        $rootScope.data.demandes[idDemande].historique.push({
            action: 'Prêt refusé',
            date: date,
            heure: heure
        });
        $scope.showSimpleToast("Demande refusée");

        $scope.tryBack();
    };

    $scope.showSimpleToast = function(text) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(text)
            .position('bottom center')
            .hideDelay(2000)
        );
    };

});
