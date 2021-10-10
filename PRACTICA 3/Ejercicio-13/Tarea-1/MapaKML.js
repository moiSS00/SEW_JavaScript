var mapaDinamicoGoogle = new Object();


mapaDinamicoGoogle.initMap = function initMap(){

//Si se ha subido un archivo 
if(document.getElementById("subirArchivos").files.length > 0){

    //Recogemos el archivo 
    var archivo = document.getElementById("subirArchivos").files[0];

    //Comprobamos su formato
    if (archivo.type.match(/kml.*/)) {

        //Leemos el archivo, preparando un método para cuando este se carge por completo 
        var lector = new FileReader();
        lector.onload = function (evento) {

            //Creamos el mapa
            var defecto = {lat: 40.4167754, lng: -3.7037902};
            map = new google.maps.Map(document.getElementById('mapa'),{zoom: 6,center:defecto});

            //Recogemos las coordenadas y las parseamos
            var lines = $('LineString',lector.result);
            var coordenadas = $('coordinates',lines);
            for(var i = 0;i < coordenadas.length;i++){
                var pares = coordenadas[i].innerText.split("\n");
                var puntos = new Array();
                for(var j = 0;j < pares.length;j++){
                    if(pares[j] != ""){
                        var par = pares[j].split(",");
                        var punto = { lat: par[1] * 1, lng: par[0] * 1 }; 
                        puntos.push(punto); //Añadimos el punto a el conjunto de puntos
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
        lector.readAsText(archivo);
    }
}
}
    





    
   

    
