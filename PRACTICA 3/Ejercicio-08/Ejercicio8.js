"use strict";
class Meteo {
    constructor(){
        this.apikey = "110fcc2ad3188ee1d3f0afd1c3bd31e3"; //APIKEY a usar 
        this.unidades = "&units=metric"; //Unidades a usar 
        this.idioma = "&lang=es"; //Idioma a usar 
        this.error = "<p>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>"; //En caso de error
    }
    cargarDatos(ciudad){
        //Establecemos la ciudad y la URL 
        this.ciudad = ciudad;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo.ciudad + meteo.unidades + meteo.idioma + "&APPID=" + meteo.apikey;
        
        $.ajax({
            dataType: "json", //Establce el tipo 
            url: meteo.url,
            method: 'GET', //Establece la accion de la peticion 
            success: function(data){ //En caso de exito 
                this.datos = data; //Asignados datos 
                
                //Formamos una cadena con la representacion 
                var html = ""; 
                html += "<h2>Datos</h2>"
                html += "<ul>"; 
                html += "<li>Ciudad: " + this.datos.name + "</li>";
                html += "<li>País: " + this.datos.sys.country + "</li>";
                html += "<li>Latitud: " + this.datos.coord.lat + " grados</li>";
                html += "<li>Longitud: " + this.datos.coord.lon + " grados</li>";
                html += "<li>Temperatura: " + this.datos.main.temp + " grados Celsius</li>";
                html += "<li>Temperatura máxima: " + this.datos.main.temp_max + " grados Celsius</li>";
                html += "<li>Temperatura mínima: " + this.datos.main.temp_min + " grados Celsius</li>";
                html += "<li>Presión: " + this.datos.main.pressure + " milímetros</li>";
                html += "<li>Humedad: " + this.datos.main.humidity + "%</li>" ;
                html += "<li>Amanece a las: " + new Date(this.datos.sys.sunrise *1000).toLocaleTimeString() + "</li>" ;
                html += "<li>Oscurece a las: " + new Date(this.datos.sys.sunset *1000).toLocaleTimeString() + "</li>"; 
                html += "<li>Dirección del viento: " + this.datos.wind.deg + "  grados</li>";
                html += "<li>Velocidad del viento: " + this.datos.wind.speed + " metros/segundo</li>";
                html += "<li>Hora de la medida: " + new Date(this.datos.dt *1000).toLocaleTimeString() + "</li>";
                html += "<li>Fecha de la medida: " + new Date(this.datos.dt *1000).toLocaleDateString() + "</li>";
                html += "<li>Descripción: " + this.datos.weather[0].description + "</li>";
                html += "<li>Visibilidad: " + this.datos.visibility + " metros</li>";
                html += "<li>Nubosidad: " + this.datos.clouds.all + " %</li>";
                html += "</ul>";
                html += "<img src=http://openweathermap.org/img/wn/" + this.datos.weather[0].icon + "@2x.png />"; //Se coge el icono 

                //La añadimos a nuesto documento html
                $("#info").html(html);  
            },
            error:function(){ //En caso de que haya habido algun error 
                $("#info").html(this.error);
            }
        });
    }
}

var meteo = new Meteo(); 
