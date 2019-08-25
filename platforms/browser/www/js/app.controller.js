
app.controller('AppController', function($rootScope, $scope, $mdSidenav, $location) {

	$rootScope.history = [];

	$rootScope.$on('$routeChangeSuccess', function() {
		$rootScope.history.push($location.$$path);
		$mdSidenav('sidenav').close();
	});

	$scope.openSidenav = function () {
		$mdSidenav('sidenav').open();
	};

	$scope.closeSidenav = function () {
		$mdSidenav('sidenav').close();
	};

	document.addEventListener('backbutton', function () {

		if($mdSidenav('sidenav').isOpen()) {

			$mdSidenav('sidenav').close();

		} else if($rootScope.history.length >= 2) {

			$rootScope.history.pop();

			$location.path($rootScope.history.pop());

			$rootScope.$apply();

		} else {

			navigator.app.exitApp();

		}

	}, false);

});
