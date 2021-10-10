"use strict";
class CalculadoraCambioUnidades {
    
    constructor (){
        //Representamos con un array las distintas magnitudes del tipo de medida que se dan como opción, ordenadas por capacidad de 
        //forma ascendente. 
        this.opciones = new Array();  
        this.numeroBase = ""; //Rperesenta el número base a convertir
        this.paso = 0; //Representa el paso entre unas magnitudes y otras
        this.base = ""; //Representa el tipo de magnitud base 
        this.destino = "";  //Representa el tipo de magnitud destino
    }

    /*
    * Excribe el dígito que se le pase como parámetro en la pantalla 
    */
    digito(n){
        this.numeroBase += n; 
        document.getElementById("numeroBase").value += n; 
    }

    /**
     * Elimina el último dígito del número base 
     */
    del(){
        this.numeroBase = this.numeroBase.substring(0,this.numeroBase.length-1); 
        this.establecerBase(this.base); 
    }

    /*
    * Escribe un punto decimal 
    */
    punto(){
        this.numeroBase += "."; 
        document.getElementById("numeroBase").value += ".";
    }

    /*
    * Establece el tipo destino y lo indica en la pantalla correspondiente 
     */
    establecerDestino(d){
        this.destino = d; 
        document.getElementById("numeroDestino").value = this.destino + ": "; 
    }


    /*
    * Establece el tipo base y lo indica en la pantalla correspondiente 
     */
    establecerBase(b){
        this.base = b;
        document.getElementById("numeroBase").value = this.base + ": " + this.numeroBase; 
    }

    /*
    * Inicializa las diversas opciones de magnitudes en función del tipo de medida a usar. También se estabece el paso 
    */
    formarOpciones(tipo){
        
        this.numeroBase = ""; 

        document.getElementById("numeroBase").value = "Número base"; 
        document.getElementById("numeroDestino").value = "Número convertido"; 

        if(tipo == "Longitud"){
            this.opciones = ["Milímetro","Centímetro","Decímetro","Metro","Decámetro","Hectómetro","Kilómetro"];  
            this.mostrarOpcionesBase(); 
            this.mostrarOpcionesDestino(); 
            this.paso = 10; 
        }
        else if(tipo == "Superficie"){
            this.opciones = ["Milímetro2","Centímetro2","Decímetro2","Metro2","Decámetro2","Hectómetro2","Kilómetro2"];  
            this.mostrarOpcionesBase();
            this.mostrarOpcionesDestino();  
            this.paso = 100; 
        }

        else if(tipo == "Volumen"){
            this.opciones = ["Milímetro3","Centímetro3","Decímetro3","Metro3","Decámetro3","Hectómetro3","Kilómetro3"];  
            this.mostrarOpcionesBase();
            this.mostrarOpcionesDestino(); 
            this.paso = 1000; 
        }
    }

    /*
    * Genera el html necesario para mostrar las opciones que serán visibles en los botones correspondientes al tipo base 
    */
    mostrarOpcionesBase(){
        var html = ""; 
        for(var i in this.opciones){
            html += "<input type=\"button\" value=\"" + this.opciones[i] + "\"onclick=\"calculadora.establecerBase('" + this.opciones[i] + "');\"/>"; 
        }
        document.getElementById("base").innerHTML = html; 
    }

    /*
    * Genera el html necesario para mostrar las opciones que serán visibles en los botones correspondientes al tipo destino  
    */
   mostrarOpcionesDestino(){
    var html = ""; 
    for(var i in this.opciones){
        html += "<input type=\"button\" value=\"" + this.opciones[i] + "\"onclick=\"calculadora.establecerDestino('" + this.opciones[i] + "');\"/>"; 
    }
    document.getElementById("destino").innerHTML = html; 
}

    /*
    * Convierte de la magnitud del numero base a la magnitud seleccionada como destino
    */
    conversion(){
        
        var posBase = this.buscar(this.base); 
        var posDestino = this.buscar(this.destino);

        var saltos = posDestino - posBase; 
        var numero = this.numeroBase;

        if(saltos >= 0 ){
            numero = Number(numero / Math.pow(this.paso,saltos));
        }
        else{
            numero = Number(numero * Math.pow(this.paso,Math.abs(saltos)));
        }  

        document.getElementById("numeroDestino").value = this.destino + ": " + numero;
    }

    /*
    * Busca la posicion en la jerarquia de magnitudes de una magnitud en cocreto 
    */
    buscar(opcion){
        for(var i in this.opciones){
            if(this.opciones[i] == opcion){
                return i; 
            }
        }
    }

    

}

var calculadora = new CalculadoraCambioUnidades(); 