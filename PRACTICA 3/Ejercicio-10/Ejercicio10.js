"use strict";
class Ejercicio10 {

    //Constructor
    constructor(){
        this.flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    }


    /*
    * Método principal que se encarga de formatear la búsqueda introducida por el usuario y mostrar los resultados obtenidos
    */
    buscar(){

        //Eliminamos las fotos que había anteriormente
        $("#imagenes").html("<h2>Imagenes encontradas</h2>");

        //Obtenemos la cadena y la formateamos quitandole espacios sobrantes y dividiendola por el carácter ;
        var cadena = $("#buscador").val();
        var listaTags = cadena.trim().split(";");
        
        //Recorremos la lista de etiquetas pidiendole a la API las imagenes resultantes para cada una de ellas
        for(var j in listaTags){
            $.getJSON(this.flickrAPI, 
                {
                    tags: listaTags[j], //Le pasamos la etiqueta correspondiente 
                    tagmode: "any",
                    format: "json"
                })
            .done(function(data) {
                $("#imagenes").append( "<hr/>");  //Se añade el separador  
                    $.each(data.items, function(i,item ) {
                        $("<img>").attr( "src", item.media.m).appendTo( "#imagenes" ); //Le añade la imagen encontrada al final de la lista de imagenes
                        if ( i === 20 ) { //Establecemos el límite en 20 resultados por etiqueta
                                return false;
                                }
                    });
            });
        }
    }

}

var ejercicio10 = new Ejercicio10(); 

