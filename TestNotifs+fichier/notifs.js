document.addEventListener('deviceready', notifications, false);

var PDL = 12345678901234;

var notifs = document.getElementById('notifs');

function notifications()
{
    notifs.addEventListener('click', function() {
        var now = new Date().getTime(), //récupère l'heure
        heureNotif = new Date(now + 3*1000); //ajoute 3 sec à l'heure, pour lancer la notif 3 sec après le clic

        window.plugin.notification.local.add({
        id:      '1',               //On peut laisser toujours le meme id, cela ne gène pas a mon avis
        title:   'Notifications PDL',
        message: 'PDL : ' + PDL, //Message affiché dans la notif
        date:    heureNotif // si on ne met pas ce paramètre la notif se lancera dès le clic
        });
        PDL++;
    }, false);
}