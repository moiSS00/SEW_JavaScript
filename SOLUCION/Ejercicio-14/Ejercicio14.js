"use strict";
class Ejercicio14 {

    //Constructor
    constructor(){
        
    }

    /*
    * Prepara los componentes para recibir o enviar mediante drag and drop
    * y genera el contenido del canvan
    */
    iniciar(){
        this.preparadarOrigen("1");
        this.preparadarOrigen("2");
        this.prepararDestino("destino"); 
        
        var canvas = document.getElementById('destino');
        var canvas1 = canvas.getContext('2d');

        //Dibujo de texto
        canvas1.font = 'italic 50px sans-serif';
        canvas1.strokeStyle = "rgba(255, 0, 0, 1)"; 
        canvas1.strokeText("Arrastre aquí",0,100); 
    }

    /*
    * Prepara un componente para poder actuar como origen en un drag and drop
    */
    preparadarOrigen(origen){
        var origen = document.getElementById(origen);

        origen.ondragstart = function(event){
            event.dataTransfer.setData("content",event.target.id);
        }
    }


    /*
    * Prepara un componente para poder actuar como destino en un drag and drop
    */
    prepararDestino(destino){
        var destino = document.getElementById(destino);

        destino.ondragover = function(event){
            event.preventDefault(); 
        }

        destino.ondrop = function(event){
            var id = event.dataTransfer.getData("content");
            document.getElementById(id).requestFullscreen(); 
        }
    }


}

var ejercicio14 = new Ejercicio14(); 




    


