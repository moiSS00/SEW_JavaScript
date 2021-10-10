"use strict";
class GeoLocalizacion {
    
    //Constructor 
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.controlErrores.bind(this));
    }

    /*
    * Recoge la información de la posición actual 
    */
    getPosicion(posicion){
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización"; //El mensaje representará el estado del proceso
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }

    /*
    * Obiene la longitud
    */
    getLongitud(){
        return this.longitud;
    }

    /*
    * Obiene la latitud
    */
    getLatitud(){
        return this.latitud;
    }

    /*
    * Obiene la altitud
    */
    getAltitud(){
        return this.altitud;
    }

    /*
    * Muestra la información de la posición actual 
    */
    mostrarPosicion(){
        var ubicacion=document.getElementById("ubicacion");
        var datos = "<h2>Datos:</h2>"
        datos+="<ul>"; 
        datos+='<li>'+ this.mensaje + '</li>'; 
        datos+="<li>Longitud: "+this.longitud +" grados</li>"; 
        datos+="<li>Latitud: "+this.latitud +" grados</li>";
        datos+="<li>Precisión de la latitud y longitud: "+ this.precision +" metros</li>";
        datos+="<li>Altitud: "+ this.altitude +" metros</li>";
        datos+="<li>Precisión de la altitud: "+ this.precisionAltitud +" metros</li>"; 
        datos+="<li>Rumbo: "+ this.rumbo +" grados</li>"; 
        datos+="<li>Velocidad: "+ this.velocidad +" metros/segundo</li>";
        datos+="</ul>";
        datos+="<h2>Mapa estático</h2>";
        ubicacion.innerHTML = datos;
        this.getMapaEstaticoGoogle(); 
    }

    /*
    * Controla si hubo algún tipo de error y prepara el mensaje correspondiente 
    */
    controlErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }

    getMapaEstaticoGoogle(){
        var ubicacion=document.getElementById("ubicacion"); 
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        
        //URL
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        
        //Parámetros
        var centro = "center=" + this.latitud + "," + this.longitud;
        var zoom ="&zoom=15";
        var tamaño= "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML += "<img src='"+this.imagenMapa+"'/>";
    }

}


var miPosicion = new GeoLocalizacion(); 


