/*
 * Cree par:
 *
 * Nicolas Devynck
 * www.nicolas-devynck.fr
 *
 * Renaud Vivancos
 * http://www.rvivancos.fr/cv/
 *
 * Ulysse Gabelli
 *
 * Isabelle Gomes Da Costa
 * facebook.com/isabel.dacosta.50552
 */
//fonction pour ajouter un espace dans les numero
function splitNum(num) {
	var tabArr = num.split("");
     var strFinal = "";
     for (var i = 0; i < tabArr.length; i++) {
       strFinal+=tabArr[i];
       if((i % 3) == 0) {
         strFinal+= " ";
       }
     }
     return strFinal;
	}

     
//fonction pour ajouter un espace dans les PDL
function splitPdl(Pdl) {
     var tabArr = Pdl.split("");
     var strFinal = "";
     for (var i = 0; i < tabArr.length; i++) {
       if((i % 3) == 0) {
         strFinal+= " ";
       }
       strFinal+=tabArr[i];
     }
     return strFinal;
}
var regInsee=new RegExp("^[0-9]{5}$"); // expression reguliere pour le code INSEE
var regTel=new RegExp("^[0-9]{10}$"); // expression reguliere pour les N° de Tél
var regPdl=new RegExp("^[0-9]{14}$"); // expression reguliere pour les PDL
// --------------------------------------------------------
// Creation des 1er localStorage utile pour l'appli
// --------------------------------------------------------
if (!localStorage.getItem("numInsee")) { // vérif de l'existence du localStorage
	var numInsee = prompt("Veuillez entrer le code INSEE de votre commune", ""); //invitation a entré les info
   	if (regInsee.test(numInsee)) { // verif si on est bon avec l'expression reguliere
       	localStorage.setItem("numInsee", numInsee); // creation du localStorage
   	}
   	else {
   		alert("Code INSEE invalide"); // msg d'erreur
   	}
}
if (!localStorage.getItem("numUrgence")) { // vérif de l'existence du localStorage
   	var numUrgence = prompt("Veuillez entrer Numero d'urgence", "0811010212"); //invitation a entré les info
   	if (regTel.test(numUrgence)) { // verif si on est bon avec l'expression reguliere
		localStorage.setItem("numUrgence", numUrgence); // creation du localStorage
   	}
   	else {
   		alert("Numero d'urgence invalide"); // msg d'erreur
   	}
}
if (!localStorage.getItem("numService")) { // vérif de l'existence du localStorage
   	var numService = prompt("Veuillez entrer Numero de service", "0969321811"); //invitation a entré les info
   	if (regTel.test(numService)) { // verif si on est bon avec l'expression reguliere
   		localStorage.setItem("numService", numService); // creation du localStorage
   	}
   	else {
   		alert("Numero de service invalide"); // msg d'erreur
   	}
}
if (!localStorage.getItem("numFix")) { // vérif de l'existence du localStorage
   	var numFix = prompt("Veuillez entrer Numero de l'interlocuteur privilégié", "0468895693"); //invitation a entré les info
   	if (regTel.test(numFix)) { // verif si on est bon avec l'expression reguliere
   		localStorage.setItem("numFix", numFix); // creation du localStorage
   	}
   	else {
   		alert("Numero de l'interlocuteur privilégié invalide"); // msg d'erreur
	}
}
if (!localStorage.getItem("Nom")) { // vérif de l'existence du localStorage
   	var numFix = prompt("Veuillez entrer le Nom de l'interlocuteur privilégié", "Mr Leroutier"); //invitation a entré les info
	localStorage.setItem("Nom", numFix); // creation du localStorage
}
if (!localStorage.getItem("numPortable")) { // vérif de l'existence du localStorage
   	var numPortable = prompt("Veuillez entrer Numero de l'interlocuteur privilégié", "0786556415"); //invitation a entré les info
   	if (regTel.test(numPortable)) { // verif si on est bon avec l'expression reguliere
   		localStorage.setItem("numPortable", numPortable); // creation du localStorage
   	}
   	else {
		alert("Numero de l'interlocuteur privilégié invalide"); // msg d'erreur
   	}
}
// --------------------------------------------------------
// Affichage de tout les PDL si l'ID existe
// --------------------------------------------------------
if(document.getElementById('PDL')) { // verif de l'existence de l'ID PDL
	//document.getElementById('PDL').size = 12; //taille du select//
	for (var i = 0; i < localStorage.length; i++) { //boucle qui recup tout les pdl
		var keyStorage = localStorage.key(i);
		var valueStorage = localStorage.getItem(localStorage.key(i));
		if (keyStorage === 'Nom') { continue; } // ignorer le Nom
		if (keyStorage === 'numInsee') { continue; } // ignorer le localStorage numInsee
		if (keyStorage === 'numUrgence') { continue; } // ignorer le localStorage numUrgence
		if (keyStorage === 'numService') { continue; } // ignorer le localStorage numService
		if (keyStorage === 'numPortable') { continue; } // ignorer le localStorage numPortable
		if (keyStorage === 'numFix') { continue; } // ignorer le localStorage numFix
		// générer l'affichage
		document.getElementById('PDL').innerHTML += "<option value='"+ keyStorage + "'>"+ keyStorage +"</option>";
	}
}
// --------------------------------------------------------
// générer les lien tél si l'ID existe
// --------------------------------------------------------
if (document.getElementById('numUrgenceLink')){
	document.getElementById('numUrgenceLink').href = 'tel:+33'+localStorage.getItem('numUrgence').substr(1);
}
if (document.getElementById('numServiceLink')){
	document.getElementById('numServiceLink').href = 'tel:+33'+localStorage.getItem('numService').substr(1);
}
if (document.getElementById('numPortableLink')){
	document.getElementById('numPortableLink').href = 'tel:+33'+localStorage.getItem('numPortable').substr(1);
}
if (document.getElementById('numFixLink')){
	document.getElementById('numFixLink').href = 'tel:+33'+localStorage.getItem('numFix').substr(1);
}
// --------------------------------------------------------
// générer les N° tél et le nom si l'ID existe
// --------------------------------------------------------
if (document.getElementById('Nom')){
	document.getElementById('Nom').innerHTML = localStorage.getItem('Nom');
}
if (document.getElementById('numInsee')){
	document.getElementById('numInsee').innerHTML = localStorage.getItem('numInsee');
}
if (document.getElementById('numUrgence')){
	document.getElementById('numUrgence').innerHTML = splitNum(localStorage.getItem('numUrgence'));
}
if (document.getElementById('numService')){
	document.getElementById('numService').innerHTML = splitNum(localStorage.getItem('numService'));
}
if (document.getElementById('numPortable')){
	document.getElementById('numPortable').innerHTML = splitNum(localStorage.getItem('numPortable'));
}
if (document.getElementById('numFix')) {
	document.getElementById('numFix').innerHTML = splitNum(localStorage.getItem('numFix'));
}
// --------------------------------------------------------
// Fonction ajout d'un PDL
// --------------------------------------------------------
if (document.getElementById('news')){
	document.getElementById('news').addEventListener('click', function() {
		if (localStorage.length < 17) { // limitation a 12 du nombre de PDL (17-5 car le code INSEE et les N° de tel son aussi des localStorage)
			var newName = document.getElementById('newName').innerHTML;
	    	var newPdl = document.getElementById('newPdl').innerHTML;
			if (regPdl.test(newPdl) && newName){ // verif si on est bon avec l'expression reguliere et si Le nom du PDL existe
				localStorage.setItem(newName,newPdl); // creation du localStorage
				location.reload(); // rechargement de la page
			}
			else {
				alert("Numero PDL invalide"); // msg d'erreur
			}
		}
		else {
			alert("Nombre de PDL limiter"); // msg d'erreur
		}
	}, false);
}
// --------------------------------------------------------
// Fonction sup d'un PDL
// --------------------------------------------------------
if (document.getElementById('del')){
	document.getElementById('del').addEventListener('click', function() { // paramètres qui correspond à la key du localStorage
	    localStorage.removeItem(document.getElementById('PDL').value); // sup
	    location.reload(); // rechargement de la page
	}, false);
}
// --------------------------------------------------------
// Fonction edit des localStorage utile pour l'appli
// --------------------------------------------------------
if (document.getElementById('edit')){
	document.getElementById('edit').addEventListener('click', function() {
		if (document.getElementById('numInsee')){
			if (regInsee.test(document.getElementById('numInsee').innerHTML)) { // verif si on est bon avec l'expression reguliere
				localStorage.setItem("numInsee",document.getElementById('numInsee').innerHTML); // modif du localStorage
			}
			else {
				alert("Code INSEE invalide"); // msg d'erreur
			}
		}
		if (document.getElementById('Nom')){ // nom du l'interlocuteur priviliger
			localStorage.setItem("Nom",document.getElementById('Nom').innerHTML); // modif du localStorage
		}
		if (document.getElementById('numUrgence')){
			if (regTel.test(document.getElementById('numUrgence').innerHTML)) { // verif si on est bon avec l'expression reguliere
				localStorage.setItem("numUrgence",document.getElementById('numUrgence').innerHTML); // modif du localStorage
			}
			else {
				alert("Numero d'urgence invalide"); // msg d'erreur
			}
		}
		if (document.getElementById('numService')){
			if (regTel.test(document.getElementById('numService').innerHTML)) { // verif si on est bon avec l'expression reguliere
				localStorage.setItem("numService",document.getElementById('numService').innerHTML); // modif du localStorage
			}
			else {
				alert("Numero de service invalide"); // msg d'erreur
			}
		}
		if (document.getElementById('numPortable')){
			if (regTel.test(document.getElementById('numPortable').innerHTML)) { // verif si on est bon avec l'expression reguliere
				localStorage.setItem("numPortable",document.getElementById('numPortable').innerHTML); // modif du localStorage
			}
			else {
				alert("Numero de l'interlocuteur privilégié invalide"); // msg d'erreur
			}
		}
		if (document.getElementById('numFix')){
			if (regTel.test(document.getElementById('numFix').innerHTML)) { // verif si on est bon avec l'expression reguliere
				localStorage.setItem("numFix",document.getElementById('numFix').innerHTML); // modif du localStorage
			}
			else {
				alert("Numero de l'interlocuteur privilégié invalide"); // msg d'erreur
			}
		}
		alert('Modification validée(s)'); //msg de validation
		history.back(); // page precedente
	}, false);
}
// --------------------------------------------------------
// Fonction envoyer la notif
// --------------------------------------------------------
if (document.getElementById('appel')){
	document.getElementById('appel').addEventListener('click', function() {
		var now = new Date().getTime(), //récupère l'heure
		heureNotif = new Date(now + 1*1000); //ajoute 1 sec à l'heure, pour lancer la notif 3 sec après le clic

		window.plugin.notification.local.add({
			id:      '1',               //On peut laisser toujours le meme id, cela ne gène pas a mon avis
		    title:   document.getElementById('PDL').value,
		    message: 'PDL : ' + splitPdl(localStorage.getItem(document.getElementById('PDL').value)), //Message affiché dans la notif
		    date:    heureNotif // si on ne met pas ce paramètre la notif se lancera dès le clic
		});
	document.location.href='tel:+33'+localStorage.getItem('numUrgence').substr(1);
	}, false);
}