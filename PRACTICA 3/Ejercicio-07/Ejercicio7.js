"use strict";
class Ejercicio7 {
    
    constructor (){

    }

    /*
    * Muestra el apartado de información
    */
    mostrarInformacion(){
        $("#info").show(); 
    }

    /*
    * Oculta el apartado de información
    */
    ocultarInformacion(){
        $("#info").hide();
    }

    /*
    * Muestra todos los encabezados del documento
    */
    mostrarEncabezados(){
        $("h1,h2,h3").show(); 
    }

    /*
    * Oculta todos los encabezados del documento
    */
    ocultarEncabezados(){
        $("h1,h2,h3").hide();
    }

    /*
    * Modifica el apartado de información
    */
    modificarInformacion(){
        $("#contenidoInfo").text("Ejercicio hecho por Moisés Sanjurjo Sánchez (UO270824)");
    }


    /*
    * Modifica los aparatados del documento
    */
    modificarEncabedados(){
        $("h1").text("Encabezado de nivel 1");
        $("h2").text("Encabezado de nivel 2");
        $("h3").text("Encabezado de nivel 3");
    }


    /*
    * Crea una tabla rellenandola con numeros enteros aleatorio con minimo 1 y maximo 10 
    */
    crearTabla(){
        var tablaHtml = ""
        for(var i = 0; i< 10 ;i++){
            tablaHtml += "<tr>"; 
            for(var j = 0; j < 3; j++){
                var aleatorio = Math.round(Math.random() * 10); 
                tablaHtml += "<td>" + aleatorio + "</td>"; 
            }
            tablaHtml += "</tr>"; 
        }
        $("#tabla").append(tablaHtml);
    }

    /*
    * Elimina todas las celdas de la tabla 
    */
    eliminarDatosTabla(){
        $("tr td").remove(); 
    }


    /*
    * Suma todas las celdas actuales de la tabla y muestra el resultado en el documento HTML 
    */
    sumarTabla(){
        var total = 0; 
        $("table td").each( function(){
            total += Number.parseInt($(this).text());
        });
        $("#suma").text("La suma de todas las celdas de la tabla es igual a " + total);
    }


    /*
    * Muestra el árbol DOM. Para cada elemento del árbol, muestra el tipo de su elemento padre y el tipo del 
    * elemento actual
    */
    mostrarDOM(){
        $(document.body).append("<h3> Árbol DOM del documento HTML:</h3>");
        $("*").each(function() {
            var padreElemento = "Elemento padre: " + $(this).parent().get(0).tagName;
            var hijoElemento = "Tipo de elemento actual: " + $(this).get(0).tagName; 
            var valorHijo = ""
            $(document.body).append("<p>" + padreElemento + " | "+ hijoElemento + "</p>");
        });
    }



}

var ejercicio7 = new Ejercicio7(); 
