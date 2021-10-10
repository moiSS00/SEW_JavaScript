"use strict";
class Ejercicio12 {
    
    constructor(){
        this.indice = -1; //Índice auxiliar para la navegación 
        this.tamaño = 0; //Representará el número de documentos cargados desde la maquina del cliente
    }

    /*
    * Construye y muestra la información general 
    */
    cabecera(){
        document.getElementById("areaTexto").innerText = "";
        document.getElementById("info").innerHTML = "<h2>Información general</h2>";
        var nBytes = 0;
        var archivos = document.getElementById("subirArchivos").files;
        var nArchivos = archivos.length;
        this.tamaño = nArchivos; 
        for (var i = 0; i < nArchivos; i++) {
            nBytes += archivos[i].size;
        }
        var nombresTiposTamaños="<p>Lista de archivos cargados:</p><ul>";
        for (var i = 0; i < nArchivos; i++) {
            nombresTiposTamaños += "<li>Archivo[" + i +"] = "+ archivos[i].name  + " Tamaño: " + archivos[i].size +" bytes " + " Tipo: " + archivos[i].type+"</li>" ;
        }
        nombresTiposTamaños+="</ul>";

        document.getElementById("info").innerHTML += "<p>Archivos seleccionados: " + nArchivos + "</p>";
        document.getElementById("info").innerHTML += "<p>Tamaño total: " + nBytes + " bytes</p>";
        document.getElementById("info").innerHTML += nombresTiposTamaños;
    }


    /*
    * Pasa al siguiente menú de navegación 
    */
    siguiente(){
        if(this.indice + 1 < this.tamaño){
            this.indice += 1; 
            this.leerArchivoTexto();
        }
    }


    /*
    * Pasa al anterior menú de navegación 
    */
    atras(){
        if(this.indice - 1 <= -1){
            this.cabecera(); 
            this.indice = -1; 
        }
        else{
            this.indice -= 1; 
            this.leerArchivoTexto(); 
        }    
    }

    /*
    * Construye y muestra la informacion para un archivo en especifico 
    */
    leerArchivoTexto() 
    { 
        var files = document.getElementById("subirArchivos").files;
        var html = ""; 

        //Optenemos el archivo y el area donde mostraremos la información
        var archivo = files[this.indice];
        var areaVisualizacion = document.getElementById("areaTexto");
        
        //Construimos el html de la información
        html += "<h2>" + archivo.name + "</h2><ul>";
        html += "<li>Tamaño del archivo: " + archivo.size + " bytes</li>"; 
        html += "<li>Tipo del archivo: " + archivo.type + "</li>";
        html += "<li>Fecha de la última modificación: " + archivo.lastModifiedDate + "</li>";
        html +=  "</ul><p>Contenido del documento:</p>"
    
        //Comprobamos el tipo de archivo subido 
        if (archivo.type.match(/text.*/) || archivo.type.match(/xml.*/) || archivo.type.match(/json.*/)) 
        {
            var lector = new FileReader();
            lector.onload = function (evento) {
                areaVisualizacion.innerText = lector.result; //Mostramos el contenido del archivo
            }      
            lector.readAsText(archivo);
        }
        else { //En caso de error
            html = "<p>Error : ¡¡¡ Archivo no válido !!!</p>";
        }
        
        //Representamos información
        document.getElementById("info").innerHTML = html;
 
    }
}


var gestorArchivos = new Ejercicio12(); 
