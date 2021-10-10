var mapaDinamicoGoogle = new Object();

//Inicia el mapa tomando como punto de referencia la universidad
mapaDinamicoGoogle.initMap = function initMap(){
    var universidad = {lat: 43.3548057, lng: -5.8512759};
    mapaDinamicoGoogle.mapa = new google.maps.Map(document.getElementById('mapa'),{zoom: 2,center:universidad});
};

//Añadimos un marcador al mapa
mapaDinamicoGoogle.añadirMarcador = function añadirMarcador(){
    var latitud = document.getElementById("latitud").value * 1;
    var altitud = document.getElementById("altitud").value * 1; 
    var marcador = {lat: latitud, lng: altitud};
    var marcador = new google.maps.Marker({position:marcador,map:mapaDinamicoGoogle.mapa});
};

