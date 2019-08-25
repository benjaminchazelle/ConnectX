function browseFileSystem(invokerElement, method) {

    var fileBrowserInput = document.createElement("INPUT");
    fileBrowserInput.setAttribute("type", "file");

    fileBrowserInput.click();

    fileBrowserInput.onchange = function() {

        var file = fileBrowserInput.files[0];

        var reader = new FileReader();

        reader.addEventListener("load", function() {
            angular.element(invokerElement).scope()[method](reader.result);
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }

    };

}

function getNow() {
	var dateNow = new Date();
	var h = dateNow.getHours();
	h = String(h).length == 1 ? "0" + h : h;
	var m = dateNow.getMinutes();
	m = String(m).length == 1 ? "0" + m : m;

	var heure = h + 'h' + m;

	var y = dateNow.getYear();
	var mo = dateNow.getMonth();
	mo = String(mo).length == 1 ? "0" + mo : mo;
	var d = dateNow.getDate();
	d = String(d).length == 1 ? "0" + d : d;
	var date = d + '/' + mo + '/' + '20' + (y - 100);

	return {
		date : date,
		time : heure
	};
}
