$(document).ready(function() {
    // La géolocalisation est-elle prise en charge par le navigateur ?
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler, {enableHighAccuracy:false, maximumAge:60000, timeout:27000});
    }
    else
    {
        alert('Votre navigateur ne prend malheureusement pas en charge la géolocalisation.');
    }
});

// Fonction de traitement de la position
function showLocation(position)
{
    document.write('Latitude : '+ position.coords.latitude +' - Longitude : '+ position.coords.latitude);
}

// Fonction de gestion des erreurs
function errorHandler(error)
{
    // On log l'erreur sans l'afficher, permet simplement de débugger.
    console.log('Geolocation error : code '+ error.code +' - '+ error.message); 

    // Affichage d'un message d'erreur plus "user friendly" pour l'utilisateur.
    alert('Une erreur est survenue durant la géolocalisation. Veuillez réessayer plus tard ou contacter le support.');
}