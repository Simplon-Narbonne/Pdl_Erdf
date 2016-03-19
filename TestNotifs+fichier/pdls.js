var listePdls= document.getElementById('pdls');

function request(callback) {

    var xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
   
    xhr.open("GET", "http://www.rvivancos.fr/test.php", true); 
    xhr.send(null);
    }

function readData(sData) {

    // Attention ce code fonctionne sur le telephone mais pas sur l'ordinateur (erreur pour récupérer le fichier php, voir la console de firefox pour le détail)
    var pdls = sData;
    pdls = pdls.substring(0,pdls.length-2);
    var pdlsParses = pdls.split(",");   //pdlsParses continent la liste des pdls et des noms (les cases paires contiennent le nom, les cases impaires le numero)
    for (var i=0; i<pdlsParses.length; i++)
    {
        alert(pdlsParses[i]);
    }
}