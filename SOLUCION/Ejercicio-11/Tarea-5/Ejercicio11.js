var miMapa = new Object();

//Inicia el mapa 
miMapa.initMap = function initMap(){  
    var centro = {lat: 43.3672702, lng: -5.8502461};
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
        zoom: 8,
        center:centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {  
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Localización encontrada');
            infoWindow.open(mapaGeoposicionado);
            mapaGeoposicionado.setCenter(pos);
          }, function() {
            miMapa.handleLocationError(true, infoWindow, mapaGeoposicionado); //Gestión de errores
          });
        } else {
          // Si el navegador no soporta la geolocalización
          miMapa.handleLocationError(false, infoWindow, mapaGeoposicionado);
        }
};

//Manejo de errores
miMapa.handleLocationError = function handleLocationError(browserHasGeolocation, infoWindow, mapaGeoposicionado) {
  infoWindow.setPosition(mapaGeoposicionado.getCenter());
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: Ha fallado la geolocalización' :
                        'Error: Su navegador no soporta geolocalización');
  infoWindow.open(mapaGeoposicionado);
}

