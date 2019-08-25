app = angular.module("App", ["ngRoute", "ngMaterial", "ngSanitize"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html"
        })
        .when("/home", {
            templateUrl: "pages/home.html"
        })
        .when("/make-request", {
            templateUrl: "pages/make-request.html"
        })
        .when("/make-loan", {
            templateUrl: "pages/make-loan.html"
        })
        .when("/profil", {
            templateUrl: "pages/profil.html"
        })
        .when("/faq", {
            templateUrl: "pages/faq.html"
        })
        .when("/settings", {
            templateUrl: "pages/settings.html"
        })
        .when("/choose-category", {
            templateUrl: "pages/chooseCategory.html"
        })
        .when("/edit-produit", {
            templateUrl: "pages/editProduit.html"
        })
        .when("/see-produit", {
            templateUrl: "pages/seeProduit.html"
        })
        .when("/product-details", {
            templateUrl: "pages/productDetails.html"
        })
        .when("/choose-cable", {
            templateUrl: "pages/chooseCable.html"
        })
        .when("/notifications", {
            templateUrl: "pages/notifications.html"
        })
        .when("/date-picker", {
            templateUrl: "pages/datePicker.html"
        })
        .when("/find-product", {
            templateUrl: "pages/findProduct.html"
        })
        .when("/chat", {
            templateUrl: "pages/chat.html"
        })
        .when("/detail-echange", {
            templateUrl: "pages/detailEchange.html"
        });
});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');
});
