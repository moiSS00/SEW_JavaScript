"use strict";
class Meteo {
    constructor(){
        this.apikey = "110fcc2ad3188ee1d3f0afd1c3bd31e3"; //ApiKey 
        this.tipo = "&mode=xml"; //Determina el modo de transmision de informacion
        this.unidades = "&units=metric"; //Unidades a usar 
        this.idioma = "&lang=es"; //Idioma a usar 
    }
    cargarDatos(ciudad){
        //Establecemos la ciudad y la URL 
        this.ciudad = ciudad;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
        
        //Solicitamos la información
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){

                //Extraemos la información del XML 
                var totalNodos            = $('*',datos).length; 
                var ciudad                = $('city',datos).attr("name");
                var longitud              = $('coord',datos).attr("lon");
                var latitud               = $('coord',datos).attr("lat");
                var pais                  = $('country',datos).text();
                var amanecer              = $('sun',datos).attr("rise");
                var minutosZonaHoraria    = new Date().getTimezoneOffset();
                var amanecerMiliSeg1970   = Date.parse(amanecer);
                amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var oscurecer             = $('sun',datos).attr("set");          
                var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var temperatura           = $('temperature',datos).attr("value");
                var temperaturaMin        = $('temperature',datos).attr("min");
                var temperaturaMax        = $('temperature',datos).attr("max");
                var temperaturaUnit       = $('temperature',datos).attr("unit");
                var humedad               = $('humidity',datos).attr("value");
                var humedadUnit           = $('humidity',datos).attr("unit");
                var presion               = $('pressure',datos).attr("value");
                var presionUnit           = $('pressure',datos).attr("unit");
                var velocidadViento       = $('speed',datos).attr("value");
                var nombreViento          = $('speed',datos).attr("name");
                var direccionViento       = $('direction',datos).attr("value");
                var codigoViento          = $('direction',datos).attr("code");
                var nombreDireccionViento = $('direction',datos).attr("name");
                var nubosidad             = $('clouds',datos).attr("value");
                var nombreNubosidad       = $('clouds',datos).attr("name");
                var visibilidad           = $('visibility',datos).attr("value");
                var precipitacionValue    = $('precipitation',datos).attr("value");
                var precipitacionMode     = $('precipitation',datos).attr("mode");
                var descripcion           = $('weather',datos).attr("value");
                var horaMedida            = $('lastupdate',datos).attr("value");
                var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                var icon           = $('weather',datos).attr("icon");
                
                
                //Formamos una cadena con la representacion en HTML de las propiedades obtenidas
                var html = ""; 
                html += "<h2>Datos</h2>"
                html += "<ul>"
                html += "<li>Ciudad: " + ciudad + "</li>";
                html += "<li>País: " + pais + "</li>";
                html += "<li>Latitud: " + latitud + " grados</li>";
                html += "<li>Longitud: " + longitud + " grados</li>";
                html += "<li>Temperatura: " + temperatura + " " + temperaturaUnit + " </li>";
                html += "<li>Temperatura máxima: " + temperaturaMax + " " + temperaturaUnit + "</li>";
                html += "<li>Temperatura mínima: " + temperaturaMin +  " " + temperaturaUnit + " </li>";
                html += "<li>Presión: " + presion + " " + presionUnit + " milímetros</li>";
                html += "<li>Humedad: " + humedad + " " + humedadUnit + "%</li>" ;
                html += "<li>Amanece a las: " + amanecerLocal + "</li>" ;
                html += "<li>Oscurece a las: " + oscurecerLocal + "</li>"; 
                html += "<li>Dirección del viento: " + direccionViento + "  grados</li>";
                html += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                html += "<li>Nombre del viento: " + nombreViento + "</li>";
                html += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                html += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                html += "<li>Descripción: " + descripcion + "</li>";
                html += "<li>Visibilidad: " + visibilidad + " metros</li>";
                html += "<li>Nubosidad: " + nubosidad + " %</li>";
                html += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                html += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                html += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                html += "</ul>"
                html += "<img src=http://openweathermap.org/img/wn/" + icon + "@2x.png />"; //Se coge el icono 

                //La añadimos a nuesto documento html
                $("#info").html(html); 
            },
            error:function(){ //En caso de error 
                $("#info").html("<p>¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>"); 
            }
        });
    }
}

var meteo = new Meteo(); 
