var mapaDinamicoGoogle = new Object();


mapaDinamicoGoogle.initMap = function initMap(){

//Si se ha subido un archivo 
if(document.getElementById("subirArchivos").files.length > 0){

    //Recogemos el archivo 
    var archivo = document.getElementById("subirArchivos").files[0];

    //Comprobamos su formato
    if (archivo.name.match(/.*geojson/)) {

        //Creamos el mapa
        var defecto = {lat: 40.4167754, lng: -3.7037902};
        map = new google.maps.Map(document.getElementById('mapa'),{zoom: 6,center:defecto});

        //Leemos el archivo, preparando un método para cuando este se carge por completo 
        var lector = new FileReader();
        lector.onload = function (evento) {
            var data = JSON.parse(lector.result).features;
            for(var i = 0;i < data.length;i++){
                var puntos = new Array(); 
                var geometry = data[i].geometry; 
                if(geometry.type == "LineString"){
                    var coordenadas = data[i].geometry.coordinates; 
                    for(var j = 0;j < coordenadas.length;j++){
                        var coordenada = coordenadas[j]; 
                        var punto = { lat: coordenada[1] * 1, lng: coordenada[0] * 1 };
                        puntos.push(punto);
                    }
                }
                
                //Formamos una plilinea represntando la ruta y se la añadimos al mapa
                var linea = new google.maps.Polyline({
                    path: puntos,
                    geodesic: true,
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                });
                linea.setMap(map);
            } 
        } 
    }
        lector.readAsText(archivo);
    }
}

    





    
   

    
