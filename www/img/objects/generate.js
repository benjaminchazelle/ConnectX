fs = require("fs")
path = require("path")

var categories = fs.readdirSync(".");

var map = {
	'Audio' : 'Matériel audio',
	'Autre' : 'Autre',
	'Batterie' : 'Batterie',
	'Chargeur' : 'Chargeur',
	'Imprimante' : 'Imprimante',
	'Wire' : 'Câble/adaptateur',
};

var images = {
	'Audio' : 'img/icons/headset.svg',
	'Autre' : 'img/icons/devices_other.svg',
	'Batterie' : 'img/icons/ic_battery_charging_full_black_24px.svg',
	'Chargeur' : 'img/icons/ic_flash_on_black_24px.svg',
	'Imprimante' : 'img/icons/print_black.svg',
	'Wire' : 'img/icons/usb_black.svg',
};

var id = 0;
var idDemande = 0;
var kind = 0;

var kindsMine = [2, 1, 3, 0];
var kindsNotMine = [0, 1, 2, 3];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var objectsCollection = [];
var demandesCollection = [];



function getInfos(name) {
	
	var sentances = [
		"Ce OBJECT est vraiment incroyable",
		"Ce OBJECT est super pratique",
		"C'est fou ce que peut faire ce OBJECT",
		"Je prête mon OBJECT ",
		"J'aime bien ce OBJECT",
		"Ce OBJECT est inusable",
		"Ce OBJECT marche encore",
		"Vous allez aimer ce OBJECT",
		"Mon OBJECT",
		"Vous avez besoin d'un OBJECT ?",
		"Contacter moi si vous avez besoin de ce OBJECT",
		"J'adore ce OBJECT",
		"Ce OBJECT est vraiment dingue"
	];	
	
	var index = getRandomInt(0, sentances.length);
	
	return sentances[index].replace("OBJECT", name);
}

function getRandomHour() {
	
	return getRandomInt(12, 23) + "h" + getRandomInt(12, 55);

}

function getRandomDistance() {
	
	var distances = ["500m", "1km", "200m", "1.5km", "6km", "900m", "2km"];
	
	return distances[getRandomInt(0, distances.length)];
	
}

function getRandomDates() {
	
	var d0 = getRandomInt(1, 5);
	var d1 = d0 + getRandomInt(1, 5);
	var d2 = d1 + getRandomInt(1, 5);
	
	d0 = String(d0).length == 1 ? "0" + d0 : d0;
	d1 = String(d1).length == 1 ? "0" + d1 : d1;
	d2 = String(d2).length == 1 ? "0" + d2 : d2;
	
	return [
		d0 + '/11/2017',
		d1 + '/11/2017',
		d2 + '/11/2017',
	];
	
}

function extend(demande, kind) {
	
	var kinds = demande.idDemandeur != 0 ? kindsMine : kindsNotMine;
	
	var realKind = kinds[kind];
	
	demande.chat = [{
			"type": "center",
			"content": "start"
		},
		{
			"type": "requester",
			"content": "Bonjour, j'aimerais emprunter votre matériel si c'est possible."
		}];
	
	if(realKind == 3) {
		
		demande.statut = "terminée";
		
		demande.chat.push({
			"type": "owner",
			"content": "Il n'y a aucun soucis je n'en ai actuellement pas l'utilité."
		});

		demande.chat.push({
			"type": "center",
			"content": "end"
		});	
		
		demande.chat.push({
			"type": "requester",
			"content": "J'ai terminé avec votre matériel, je vous le rend."
		});	
		
		demande.chat.push({
			"type": "owner",
			"content": "Merci de l'état de rendu de mon matériel."
		});			
		
	}
	
	if(realKind == 2) {
		
		demande.statut = "refusée";
		
		demande.chat.push({
			"type": "owner",
			"content": "Désolée, j'en ai besoin actuellement."
		});

		demande.chat.push({
			"type": "center",
			"content": "end"
		});		
		
	}
	
	if(realKind == 1) {
		
		demande.statut = "acceptée";
		
		demande.chat.push({
			"type": "owner",
			"content": "Il n'y a aucun soucis je n'en ai actuellement pas l'utilité."
		});
		
		demande.dateFin = null;
		demande.heureFin = null;		
		
	}
	
	if(realKind == 0) {
		
		demande.statut = "en attente";
		
		demande.dateDebut = null;
		demande.heureDebut = null;
		
		demande.dateFin = null;
		demande.heureFin = null;
		
	}
}

for(var category of categories) {
	
	if(fs.statSync("./" + category).isFile()) continue;
	
	var objects = fs.readdirSync("./" + category);
	
	var notMines = [];
	var mine = null;
	var mineId = getRandomInt(0, objects.length);
	
	
	
	for(var o in objects) {
		
		var object = objects[o];
		
		var name = path.parse("./" + category + "/" + object).name;
		
		var objectInstance = {
            'id': id,
            'idProprietaire': (o == mineId) ? 0 : getRandomInt(1, 8),
            'type': map[category],
            'nom': name,
            'infos': getInfos(name),
            'statutType': 'Gratuit-Payant',
            'statutPret': 'disponible',
            'nbPrets': Math.ceil(Math.random()*15),
            'dateMiseEnLigne': (10 + Math.ceil(Math.random()*15)) + '/10/2017',
            'prix': 0,
            'devise': '€',
            'prixType': '/prêt',
            'image': images[category],
            'photo': 'img/objects/' + category + "/" + object
        };
		
		objectsCollection.push(objectInstance);
		
		if(o == mineId) {
			mine = objectInstance;
		} else {
			notMines.push(objectInstance)
		}
		
		id++;
		
	}
	
	// mine
	
	var dates = getRandomDates();
	
	
	var demandeInstance = {'id': demandesCollection.length,
	'idProprietaire': getRandomInt(1, 8),
	'idObjet': mine.id,
	'idDemandeur': 0,
	'distance': getRandomDistance(),
	'dateDemande': dates[0],
	'heureDemande': getRandomHour(),
	'dateDebut': dates[1],
	'heureDebut': getRandomHour(),
	'dateFin': dates[2],
	'heureFin': getRandomHour(),
	'statut': 'en attente-acceptée-refusée-terminée',
	'chat': []};
	
	extend(demandeInstance, kind);
	
	demandesCollection.push(demandeInstance);
	
	
	// not mines
	
	var demandeInstance = {'id': demandesCollection.length,
	'idProprietaire': 0,
	'idObjet': notMines[getRandomInt(0, notMines.length)].id,
	'idDemandeur': getRandomInt(1, 8),
	'distance': getRandomDistance(),
	'dateDemande': dates[0],
	'heureDemande': getRandomHour(),
	'dateDebut': dates[1],
	'heureDebut': getRandomHour(),
	'dateFin': dates[2],
	'heureFin': getRandomHour(),
	'statut': 'en attente-acceptée-refusée-terminée',
	'chat': []};
	
	extend(demandeInstance, kind);
	
	demandesCollection.push(demandeInstance);
	
	kind = (kind+1)%kindsMine.length;
	
	console.log(kind);

	
}

fs.writeFileSync("object.json", JSON.stringify(objectsCollection, null, "\t"));
fs.writeFileSync("demandesCollection.json", JSON.stringify(demandesCollection, null, "\t"));
// console.log(objectsCollection);
