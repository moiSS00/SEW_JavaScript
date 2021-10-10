"use strict";
class GeoLocalizacion {
    
    //Constructor 
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }

    /*
    * Recoge la información de la posición actual 
    */
    getPosicion(posicion){
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
        datos+="<li>Longitud: "+this.longitud +" grados</li>"; 
        datos+="<li>Latitud: "+this.latitud +" grados</li>";
        datos+="<li>Precisión de la latitud y longitud: "+ this.precision +" metros</li>";
        datos+="<li>Altitud: "+ this.altitude +" metros</li>";
        datos+="<li>Precisión de la altitud: "+ this.precisionAltitud +" metros</li>"; 
        datos+="<li>Rumbo: "+ this.rumbo +" grados</li>"; 
        datos+="<li>Velocidad: "+ this.velocidad +" metros/segundo</li>";
        datos+="</ul>";
        ubicacion.innerHTML = datos;
    }

}


var miPosicion = new GeoLocalizacion(); 


