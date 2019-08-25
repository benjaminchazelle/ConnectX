app.controller('MenuController', function($rootScope, $scope, $mdSidenav, $location) {

    $scope.closeMenu = function() {

        $mdSidenav('sidenav').close();

    };

	$scope.toggleSettings = function () {

		$location.url("/notifications");

	};

});
