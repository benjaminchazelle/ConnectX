app = angular.module("App", ["ngRoute", "ngMaterial"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "pages/home.html"
	})
	.when("/make-request", {
		templateUrl : "pages/make-request.html"
	})
	.when("/make-loan", {
		templateUrl : "pages/make-loan.html"
	})
	.when("/profil", {
		templateUrl : "pages/profil.html"
	})
	.when("/faq", {
		templateUrl : "pages/faq.html"
	})
	.when("/settings", {
		templateUrl : "pages/settings.html"
	});
});

app.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('blue')
	.accentPalette('blue');
});
