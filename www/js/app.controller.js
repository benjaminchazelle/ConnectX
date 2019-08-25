app.controller('AppController', function($rootScope, $scope, $mdSidenav, $location) {

    $rootScope.history = [];

    $rootScope.$on('$routeChangeSuccess', function() {

        $rootScope.history.push($location.url());

        $mdSidenav('sidenav').close();
    });

    $rootScope.back = function() {

        $rootScope.history.pop();

        $location.url($rootScope.history.pop());

    };

	$scope.toggleNotifications = function () {

		if($location.url() != "/notifications") {
			$location.url("/notifications");
		} else {
			$rootScope.back();
		}

	};

    $scope.openSidenav = function() {
        $mdSidenav('sidenav').open();
    };

    $scope.closeSidenav = function() {
        $mdSidenav('sidenav').close();
    };

    document.addEventListener('backbutton', function() {

        if ($mdSidenav('sidenav').isOpen()) {

            $mdSidenav('sidenav').close();

        } else if ($rootScope.history.length >= 2) {

            $rootScope.back();

        } else {

            navigator.app.exitApp();

        }

    }, false);

    //Settings = convention pour garder le nom du contrôleur qui l'utilise

    $rootScope.data = {
        'filters': {
            'distance': '< 100m',
            'prix': '< 10€'
        },
        'settings': {
            'filterDistance': '< 100m',
            'modeUrgence': true,
            'notifEmail': false,
            'alarmVolume': 80,
            'alarmDisabled': false
        },
        'profil': [{
            'id': 0,
            'nom': 'Jean-Marc Généreux',
            'email': 'jm.genereux@mail.fr',
            'avatar': 'img/users/0.jpg',
            'infos': "Star de la dance sur TF1 depuis 2014. Oui je suis généreux. Et çaaa ! J'achèèète !"
        }, {
            'id': 1,
            'nom': 'Charlotte Achin',
            'email': 'cachin@mail.com',
            'avatar': 'img/users/1.jpg',
            'infos': "Étudiante lyonnaise. J'aime les câbles USB. J'aime les câbles HDMI. J'aime tout les câbles."
        }, {
            'id': 2,
            'nom': 'Nadine Berger',
            'email': 'nadine.berger@mail.fr',
            'avatar': 'img/users/2.jpg',
            'infos': "Contrôleuse de trame. Je recherche les gens qui fraude. Fraudez c'est mal !"
        }, {
            'id': 3,
            'nom': 'Thierry Boulanger',
            'email': 't.boulange@mail.fr',
            'avatar': 'img/users/3.jpg',
            'infos': "Artisant boulanger depuis 1937. J'aime le partage, l'échange et les baguettes."
        }, {
            'id': 4,
            'nom': 'Jules Labonté',
            'email': 'labonte.j@mail.fr',
            'avatar': 'img/users/4.jpg',
            'infos': "Élève ingénieur dans l'aéronotique. Je fabrique mon propre drone dans mon garage."
        }, {
            'id': 5,
            'nom': 'Pénélope Mousseau',
            'email': 'pmousseau@mail.fr',
            'avatar': 'img/users/5.jpg',
            'infos': "Assistante sociale. C'est important d'aider les autres quand ils sont en difficulté."
        }, {
            'id': 6,
            'nom': 'Hugh Labelle',
            'email': 'hugh.labelle@mail.fr',
            'avatar': 'img/users/6.jpg',
            'infos': "Travaille chez radin.com. Je suis là pour rien donner de toute façons."
        }, {
            'id': 7,
            'nom': 'Lucas Marier',
            'email': 'marierl@mail.fr',
            'avatar': 'img/users/7.jpg',
            'infos': "Salu mwa je pe vou prete ma gameboy et dotre truk oklm si vou vouler ;)"
        }],
        'objets': [
	{
		"id": 0,
		"idProprietaire": 1,
		"type": "Matériel audio",
		"nom": "Casque Bluetooth Beats",
		"infos": "Vous allez aimer ce casque Bluetooth",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 12,
		"dateMiseEnLigne": "17/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/headset.svg",
		"photo": "img/objects/Audio/Casque Bluetooth Beats.jpg"
	},
	{
		"id": 1,
		"idProprietaire": 7,
		"type": "Matériel audio",
		"nom": "Casque filaire Marshall",
		"infos": "J'adore ce casque Marshall",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 4,
		"dateMiseEnLigne": "16/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/headset.svg",
		"photo": "img/objects/Audio/Casque filaire Marshall.jpg"
	},
	{
		"id": 2,
		"idProprietaire": 5,
		"type": "Matériel audio",
		"nom": "Enceinte Beats",
		"infos": "Contacter moi si vous avez besoin de cette enceinte Beats",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 6,
		"dateMiseEnLigne": "12/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/headset.svg",
		"photo": "img/objects/Audio/Enceinte Beats.jpg"
	},
	{
		"id": 3,
		"idProprietaire": 1,
		"type": "Matériel audio",
		"nom": "Enceinte Marshall",
		"infos": "Cette enceinte envoit du lourd",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 14,
		"dateMiseEnLigne": "15/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/headset.svg",
		"photo": "img/objects/Audio/Enceinte Marshall.jpg"
	},
	{
		"id": 4,
		"idProprietaire": 5,
		"type": "Matériel audio",
		"nom": "Enceinte portable Beats",
		"infos": "Vous allez aimer cette enceinte portable",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 6,
		"dateMiseEnLigne": "19/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/headset.svg",
		"photo": "img/objects/Audio/Enceinte portable Beats.jpg"
	},
	{
		"id": 5,
		"idProprietaire": 0,
		"type": "Matériel audio",
		"nom": "Enceinte sans fil JPL",
		"infos": "JPL c'est les meilleurs",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 12,
		"dateMiseEnLigne": "24/10/2017",
		"prix": 5,
		"devise": "€",
		"prixType": "/heure",
		"image": "img/icons/headset.svg",
		"photo": "img/objects/Audio/Enceinte sans fil JPL.jpg"
	},
	{
		"id": 6,
		"idProprietaire": 1,
		"type": "Autre",
		"nom": "Appareil à raclette",
		"infos": "Cette appareil à raclette est vraiment dingue",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 10,
		"dateMiseEnLigne": "25/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/devices_other.svg",
		"photo": "img/objects/Autre/Appareil à raclette.jpg"
	},
	{
		"id": 7,
		"idProprietaire": 4,
		"type": "Autre",
		"nom": "Machine à coudre",
		"infos": "Vous avez besoin d'une machine à coudre ?",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 1,
		"dateMiseEnLigne": "21/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/devices_other.svg",
		"photo": "img/objects/Autre/Machine à coudre.jpg"
	},
	{
		"id": 8,
		"idProprietaire": 7,
		"type": "Autre",
		"nom": "Montre connectée",
		"infos": "Cette montre connectée est super pratique",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 7,
		"dateMiseEnLigne": "21/10/2017",
		"prix": 10,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/devices_other.svg",
		"photo": "img/objects/Autre/Montre connectée.jpg"
	},
	{
		"id": 9,
		"idProprietaire": 0,
		"type": "Autre",
		"nom": "Niveau laser Bosch",
		"infos": "Ce niveau laser Bosch est vraiment pratique",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 12,
		"dateMiseEnLigne": "16/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/devices_other.svg",
		"photo": "img/objects/Autre/Niveau laser Bosch.jpg"
	},
	{
		"id": 10,
		"idProprietaire": 3,
		"type": "Autre",
		"nom": "Tablette Wacom",
		"infos": "Vous avez besoin d'une tablette graphique ?",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 7,
		"dateMiseEnLigne": "24/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/devices_other.svg",
		"photo": "img/objects/Autre/Tablette Wacom.jpg"
	},
	{
		"id": 11,
		"idProprietaire": 3,
		"type": "Autre",
		"nom": "Visseuse Ryobi",
		"infos": "Ce visseuse Ryobi fait bien son travail",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 13,
		"dateMiseEnLigne": "24/10/2017",
		"prix": 10,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/devices_other.svg",
		"photo": "img/objects/Autre/Visseuse Ryobi.jpg"
	},
	{
		"id": 12,
		"idProprietaire": 2,
		"type": "Batterie",
		"nom": "Batterie de voiture Bosch",
		"infos": "J'ai une batterie de dépannage si quelqu'un à besoin",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 1,
		"dateMiseEnLigne": "25/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_battery_charging_full_black_24px.svg",
		"photo": "img/objects/Batterie/Batterie de voiture Bosch.jpg"
	},
	{
		"id": 13,
		"idProprietaire": 1,
		"type": "Batterie",
		"nom": "Batterie portable EPOW",
		"infos": "J'adore cette batterie portable",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 8,
		"dateMiseEnLigne": "16/10/2017",
		"prix": 5,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_battery_charging_full_black_24px.svg",
		"photo": "img/objects/Batterie/Batterie portable EPOW.jpg"
	},
	{
		"id": 14,
		"idProprietaire": 1,
		"type": "Batterie",
		"nom": "Batterie portable Tekkeon 3000mA",
		"infos": "C'est super pratique quand on voyage beaucoup",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 10,
		"dateMiseEnLigne": "20/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_battery_charging_full_black_24px.svg",
		"photo": "img/objects/Batterie/Batterie portable Tekkeon 3000mA.jpg"
	},
	{
		"id": 15,
		"idProprietaire": 3,
		"type": "Batterie",
		"nom": "Batterie pour voitrue Varta",
		"infos": "Batterie 24 volt 15A si besoin",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 7,
		"dateMiseEnLigne": "21/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_battery_charging_full_black_24px.svg",
		"photo": "img/objects/Batterie/Batterie pour voitrue Varta.jpg"
	},
	{
		"id": 16,
		"idProprietaire": 2,
		"type": "Batterie",
		"nom": "Batterie voiture Fulmen",
		"infos": "Je prête ma batterie de voiture qui traine au garage",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 15,
		"dateMiseEnLigne": "14/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_battery_charging_full_black_24px.svg",
		"photo": "img/objects/Batterie/Batterie voiture Fulmen.jpg"
	},
	{
		"id": 17,
		"idProprietaire": 0,
		"type": "Batterie",
		"nom": "Powerbank Kinps",
		"infos": "Ce powerbank Kinps est vraiment dingue",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 6,
		"dateMiseEnLigne": "18/10/2017",
		"prix": 1,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_battery_charging_full_black_24px.svg",
		"photo": "img/objects/Batterie/Powerbank Kinps.jpg"
	},
	{
		"id": 18,
		"idProprietaire": 1,
		"type": "Chargeur",
		"nom": "Chargeur iPhone",
		"infos": "Contacter moi si vous avez besoin de ce chargeur iPhone",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 13,
		"dateMiseEnLigne": "13/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_flash_on_black_24px.svg",
		"photo": "img/objects/Chargeur/Chargeur iPhone.jpg"
	},
	{
		"id": 19,
		"idProprietaire": 2,
		"type": "Chargeur",
		"nom": "Chargeur téléphone IVOLER",
		"infos": "Ce chargeur téléphone IVOLER marche encore",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 6,
		"dateMiseEnLigne": "16/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_flash_on_black_24px.svg",
		"photo": "img/objects/Chargeur/Chargeur téléphone IVOLER.jpg"
	},
	{
		"id": 20,
		"idProprietaire": 6,
		"type": "Chargeur",
		"nom": "Chargeur USB multiple",
		"infos": "Contacter moi si vous avez besoin de ce chargeur USB multiple",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 11,
		"dateMiseEnLigne": "12/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_flash_on_black_24px.svg",
		"photo": "img/objects/Chargeur/Chargeur USB multiple.jpg"
	},
	{
		"id": 21,
		"idProprietaire": 0,
		"type": "Chargeur",
		"nom": "Chargeur USB Secteur",
		"infos": "Un chargeur basique mais pratique quand on manque de jus ;)",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 1,
		"dateMiseEnLigne": "15/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_flash_on_black_24px.svg",
		"photo": "img/objects/Chargeur/Chargeur USB Secteur.jpg"
	},
	{
		"id": 22,
		"idProprietaire": 5,
		"type": "Chargeur",
		"nom": "Chargeur USB smartphone Samsung",
		"infos": "Je prête mon chargeur Samsung ",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 7,
		"dateMiseEnLigne": "11/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_flash_on_black_24px.svg",
		"photo": "img/objects/Chargeur/Chargeur USB smartphone Samsung.jpg"
	},
	{
		"id": 23,
		"idProprietaire": 7,
		"type": "Chargeur",
		"nom": "Chargeur Wiko",
		"infos": "Je prête mon chargeur Wiko au besoin",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 8,
		"dateMiseEnLigne": "18/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/ic_flash_on_black_24px.svg",
		"photo": "img/objects/Chargeur/Chargeur Wiko.jpg"
	},
	{
		"id": 24,
		"idProprietaire": 6,
		"type": "Imprimante",
		"nom": "Imprimante Borther - Niveau de gris",
		"infos": "Elle imprime seulement en niveau de gris sur A4",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 11,
		"dateMiseEnLigne": "12/10/2017",
		"prix": 1,
		"devise": "€",
		"prixType": "/feuille",
		"image": "img/icons/print_black.svg",
		"photo": "img/objects/Imprimante/Imprimante Borther - Niveau de gris.jpg"
	},
	{
		"id": 25,
		"idProprietaire": 0,
		"type": "Imprimante",
		"nom": "Imprimante Canon A4",
		"infos": "J'aime bien cette imprimante Canon",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 8,
		"dateMiseEnLigne": "19/10/2017",
		"prix": 10,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/print_black.svg",
		"photo": "img/objects/Imprimante/Imprimante Canon A4.jpg"
	},
	{
		"id": 26,
		"idProprietaire": 3,
		"type": "Imprimante",
		"nom": "Imprimante couleur Epson",
		"infos": "Elle imprime recto verso",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 12,
		"dateMiseEnLigne": "22/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/print_black.svg",
		"photo": "img/objects/Imprimante/Imprimante couleur Epson.jpg"
	},
	{
		"id": 27,
		"idProprietaire": 5,
		"type": "Imprimante",
		"nom": "Imprimante HP Couleur et Noir",
		"infos": "A4, A5, Couleur",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 14,
		"dateMiseEnLigne": "22/10/2017",
		"prix": 4,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/print_black.svg",
		"photo": "img/objects/Imprimante/Imprimante HP Couleur et Noir.jpg"
	},
	{
		"id": 28,
		"idProprietaire": 6,
		"type": "Imprimante",
		"nom": "Imprimante Managed A4 Noir et Couleur",
		"infos": "Contacter moi si vous avez besoin d'imprimer'",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 4,
		"dateMiseEnLigne": "16/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/print_black.svg",
		"photo": "img/objects/Imprimante/Imprimante Managed A4 Noir et Couleur.jpg"
	},
	{
		"id": 29,
		"idProprietaire": 1,
		"type": "Imprimante",
		"nom": "Imrpimante Lexmark petit volume",
		"infos": "Idéal sur petit volume",
		"statutType": "Payant",
		"statutPret": "disponible",
		"nbPrets": 3,
		"dateMiseEnLigne": "19/10/2017",
		"prix": 1,
		"devise": "€",
		"prixType": "/feuille",
		"image": "img/icons/print_black.svg",
		"photo": "img/objects/Imprimante/Imrpimante Lexmark petit volume.jpg"
	},
	{
		"id": 30,
		"idProprietaire": 4,
		"type": "Câble/adaptateur",
		"nom": "Câble ethernet",
		"infos": "Mon ancien câble ethernet",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 11,
		"dateMiseEnLigne": "16/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/usb_black.svg",
		"photo": "img/objects/Wire/Câble ethernet.jpg"
	},
	{
		"id": 31,
		"idProprietaire": 4,
		"type": "Câble/adaptateur",
		"nom": "Câble HDMI HDMI",
		"infos": "Câble HDMI HDMI pour votre télé",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 1,
		"dateMiseEnLigne": "16/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/usb_black.svg",
		"photo": "img/objects/Wire/Câble HDMI HDMI.jpg"
	},
	{
		"id": 32,
		"idProprietaire": 0,
		"type": "Câble/adaptateur",
		"nom": "Câble HDMI VGA",
		"infos": "Ce câble HDMI VGA est super pratique en cours",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 1,
		"dateMiseEnLigne": "20/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/usb_black.svg",
		"photo": "img/objects/Wire/Câble HDMI VGA.jpg"
	},
	{
		"id": 33,
		"idProprietaire": 7,
		"type": "Câble/adaptateur",
		"nom": "Câble USB miniUSB",
		"infos": "Ce câble USB miniUSB c'est le turfu",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 9,
		"dateMiseEnLigne": "24/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/usb_black.svg",
		"photo": "img/objects/Wire/Câble USB miniUSB.jpg"
	},
	{
		"id": 34,
		"idProprietaire": 7,
		"type": "Câble/adaptateur",
		"nom": "Câble USB USBc",
		"infos": "J'adore l'USBc",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 15,
		"dateMiseEnLigne": "22/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/usb_black.svg",
		"photo": "img/objects/Wire/Câble USB USBc.jpg"
	},
	{
		"id": 35,
		"idProprietaire": 5,
		"type": "Câble/adaptateur",
		"nom": "Câble VGA DVI",
		"infos": "J'ai ce vieux câble VGA DVI au besoin",
		"statutType": "Gratuit",
		"statutPret": "disponible",
		"nbPrets": 5,
		"dateMiseEnLigne": "21/10/2017",
		"prix": 0,
		"devise": "€",
		"prixType": "/prêt",
		"image": "img/icons/usb_black.svg",
		"photo": "img/objects/Wire/Câble VGA DVI.jpg"
	}
],

        'demandes': [
	{
		"id": 0,
		"idProprietaire": 2,
		"idObjet": 5,
		"idDemandeur": 0,
		"distance": "200m",
		"dateDemande": "04/11/2017",
		"heureDemande": "17h35",
		"dateDebut": "08/11/2017",
		"heureDebut": "15h24",
		"dateFin": "10/11/2017",
		"heureFin": "17h43",
		"statut": "refusée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Désolée, j'en ai besoin actuellement."
			},
			{
				"type": "center",
				"content": "end"
			}
		]
	},
	{
		"id": 1,
		"idProprietaire": 0,
		"idObjet": 1,
		"idDemandeur": 5,
		"distance": "1km",
		"dateDemande": "04/11/2017",
		"heureDemande": "20h41",
		"dateDebut": null,
		"heureDebut": null,
		"dateFin": null,
		"heureFin": null,
		"statut": "en attente",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			}
		]
	},
	{
		"id": 2,
		"idProprietaire": 5,
		"idObjet": 9,
		"idDemandeur": 0,
		"distance": "200m",
		"dateDemande": "02/11/2017",
		"heureDemande": "12h32",
		"dateDebut": "06/11/2017",
		"heureDebut": "16h31",
		"dateFin": null,
		"heureFin": null,
		"statut": "acceptée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Il n'y a aucun soucis je n'en ai actuellement pas l'utilité."
			}
		]
	},
	{
		"id": 3,
		"idProprietaire": 0,
		"idObjet": 7,
		"idDemandeur": 4,
		"distance": "2km",
		"dateDemande": "02/11/2017",
		"heureDemande": "22h26",
		"dateDebut": "06/11/2017",
		"heureDebut": "18h39",
		"dateFin": null,
		"heureFin": null,
		"statut": "acceptée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Il n'y a aucun soucis je n'en ai actuellement pas l'utilité."
			}
		]
	},
	{
		"id": 4,
		"idProprietaire": 4,
		"idObjet": 17,
		"idDemandeur": 0,
		"distance": "1km",
		"dateDemande": "02/11/2017",
		"heureDemande": "17h47",
		"dateDebut": "06/11/2017",
		"heureDebut": "16h38",
		"dateFin": "08/11/2017",
		"heureFin": "14h13",
		"statut": "terminée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Il n'y a aucun soucis je n'en ai actuellement pas l'utilité."
			},
			{
				"type": "center",
				"content": "end"
			},
			{
				"type": "requester",
				"content": "J'ai terminé avec votre matériel, je vous le rend."
			},
			{
				"type": "owner",
				"content": "Merci de l'état de rendu de mon matériel."
			}
		]
	},
	{
		"id": 5,
		"idProprietaire": 0,
		"idObjet": 14,
		"idDemandeur": 7,
		"distance": "2km",
		"dateDemande": "02/11/2017",
		"heureDemande": "22h43",
		"dateDebut": "06/11/2017",
		"heureDebut": "17h20",
		"dateFin": "08/11/2017",
		"heureFin": "15h13",
		"statut": "refusée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Désolée, j'en ai besoin actuellement."
			},
			{
				"type": "center",
				"content": "end"
			}
		]
	},
	{
		"id": 6,
		"idProprietaire": 1,
		"idObjet": 21,
		"idDemandeur": 0,
		"distance": "6km",
		"dateDemande": "02/11/2017",
		"heureDemande": "22h24",
		"dateDebut": null,
		"heureDebut": null,
		"dateFin": null,
		"heureFin": null,
		"statut": "en attente",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			}
		]
	},
	{
		"id": 7,
		"idProprietaire": 0,
		"idObjet": 19,
		"idDemandeur": 4,
		"distance": "1km",
		"dateDemande": "02/11/2017",
		"heureDemande": "12h19",
		"dateDebut": "05/11/2017",
		"heureDebut": "15h53",
		"dateFin": "06/11/2017",
		"heureFin": "21h21",
		"statut": "terminée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Il n'y a aucun soucis je n'en ai actuellement pas l'utilité."
			},
			{
				"type": "center",
				"content": "end"
			},
			{
				"type": "requester",
				"content": "J'ai terminé avec votre matériel, je vous le rend."
			},
			{
				"type": "owner",
				"content": "Merci de l'état de rendu de mon matériel."
			}
		]
	},
	{
		"id": 8,
		"idProprietaire": 4,
		"idObjet": 25,
		"idDemandeur": 0,
		"distance": "900m",
		"dateDemande": "01/11/2017",
		"heureDemande": "17h53",
		"dateDebut": "04/11/2017",
		"heureDebut": "13h19",
		"dateFin": "05/11/2017",
		"heureFin": "14h18",
		"statut": "refusée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Désolée, j'en ai besoin actuellement."
			},
			{
				"type": "center",
				"content": "end"
			}
		]
	},
	{
		"id": 9,
		"idProprietaire": 0,
		"idObjet": 26,
		"idDemandeur": 1,
		"distance": "1km",
		"dateDemande": "01/11/2017",
		"heureDemande": "17h25",
		"dateDebut": null,
		"heureDebut": null,
		"dateFin": null,
		"heureFin": null,
		"statut": "en attente",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			}
		]
	},
	{
		"id": 10,
		"idProprietaire": 6,
		"idObjet": 32,
		"idDemandeur": 0,
		"distance": "500m",
		"dateDemande": "04/11/2017",
		"heureDemande": "18h40",
		"dateDebut": "06/11/2017",
		"heureDebut": "15h53",
		"dateFin": null,
		"heureFin": null,
		"statut": "acceptée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Il n'y a aucun soucis je n'en ai actuellement pas l'utilité."
			}
		]
	},
	{
		"id": 11,
		"idProprietaire": 0,
		"idObjet": 30,
		"idDemandeur": 5,
		"distance": "900m",
		"dateDemande": "04/11/2017",
		"heureDemande": "18h43",
		"dateDebut": "06/11/2017",
		"heureDebut": "13h23",
		"dateFin": null,
		"heureFin": null,
		"statut": "acceptée",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			},
			{
				"type": "owner",
				"content": "Il n'y a aucun soucis je n'en ai actuellement pas l'utilité."
			}
		]
	},
	{
		"id": 12,
		"idProprietaire": null,
		"idObjet": null,
		"nomObjet" : "Mixeur",
		"idDemandeur": 5,
		"distance": "500m",
		"dateDemande": "03/11/2017",
		"heureDemande": "12h43",
		"dateDebut": null,
		"heureDebut": null,
		"dateFin": null,
		"heureFin": null,
		"statut": "en attente",
		"chat": [
			{
				"type": "center",
				"content": "start"
			},
			{
				"type": "requester",
				"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
			}
		]
	}
],
        'demandeSpeciale': {
            'idP': [1, 2],
            'idDemandeur': 0,
            'distance': ['2 km', '500 m'],
            'dateDemande': '25/05/2017',
            'heureDemande': '09h00',
            'dateDebut': '25/05/2017',
            'dateFin': '31/05/2017',
            'historique': [{
                'action': 'Demande de prêt effectuée',
                'date': '25/05/2017',
                'heure': '09h00'
            }]
        }
    }

    $rootScope.config = {
        'settings': {
            'filterDistance': ['< 100m',
                '100m à 200m',
                '200 à 500m',
                '500m à 1000m',
                '> 1km'
            ]
        },
        'produit': {
            'categories': ['Imprimante',
                'Chargeur',
                'Batterie',
                'Câble/adaptateur',
                'Matériel audio',
                'Autre'
            ],
            'typePret': ['Gratuit',
                'Payant',
                'Caution',
                'Prêt désactivé'
            ],
            'typePrix': ['/heure',
                '/jour',
                '/prêt',
                '/feuille'
            ]
        },
        'embouts': [{
                'nom': 'DVI',
                'image': 'img/cables/DVI.png'
            },
            {
                'nom': 'HDMI',
                'image': 'img/cables/HDMI.png'
            },
            {
                'nom': 'mini-HDMI',
                'image': 'img/cables/mini-HDMI.png'
            },
            {
                'nom': 'VGA',
                'image': 'img/cables/VGA.png'
            },
            {
                'nom': 'USB-C',
                'image': 'img/cables/USB-C.png'
            }
        ]
    }

});
