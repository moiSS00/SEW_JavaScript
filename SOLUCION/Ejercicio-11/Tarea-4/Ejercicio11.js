var mapaDinamicoGoogle = new Object();
mapaDinamicoGoogle.initMap = function initMap(){
    var universidad = {lat: 43.3548057, lng: -5.8512759};
    var mapaUniversidad = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:universidad});
    var marcador = new google.maps.Marker({position:universidad,map:mapaUniversidad});
};