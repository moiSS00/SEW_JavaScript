"use strict";
class CalculadoraRPN {
    
    constructor (){
        this.pila = new Array(); //Inicializa la pila de la calculadora 
        this.numero = "";  //Cadena que representa al numero que se esta introduciendo 
    }

    /*
    * Escribe en pantalla el dígito que se le pasa como parámetro 
    */
    dígitos(digito) {
       this.numero += "" + digito; 
       this.mostrarNumero();   
    }

    /*
    * Escribe en pantalla un punto decimal
    */
    punto(){ 
        this.numero += ".";
        this.mostrarNumero(); 
    }

    /*
    * Extrae y devuelve el ultimo elemento de la pila 
    */
    del(){ 
        var aux = this.pila.pop()/1; //Divide entre uno , para facilitar la inferencia de tipos 
        this.mostrarPila(); 
        return aux; 
    }


    /*
    * Suma los 2 últimos elementos de la pila 
    */
    suma(){ 
        var a =  this.del(); 
        var b =  this.del(); 
        var resultado = (a + b); 
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Resta los 2 últimos elementos de la pila 
    */
    resta(){ 
        var a =  this.del(); 
        var b =  this.del(); 
        var resultado = (a - b); 
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }
 
    /*
    * Multiplica los 2 últimos elementos de la pila 
    */
    multiplicación(){ 
        var a =  this.del(); 
        var b =  this.del(); 
        var resultado = (a * b); 
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Divide los 2 últimos elementos de la pila 
    */
    división(){ 
        var a =  this.del(); 
        var b =  this.del(); 
        var resultado = (a / b); 
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Realiza la raíz del último elemento de la pila 
    */
    raiz(){ 
        var a = this.del(); 
        var resultado = Math.sqrt(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Realiza el logaritmo neperiano del último elemento de la pila 
    */
    logaritmoNeperiano(){ 
        var a = this.del(); 
        var resultado = Math.log(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Realiza el logaritmo en base 10 del último elemento de la pila 
    */
    logaritmoBase10(){ 
        var a = this.del(); 
        var resultado = Math.log10(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Realiza  la potencia tomando como base el ultimo elemento de la pila y como 
    * exponente el penultimo elemento de la pila
    */
    potencia(){ 
        var exponente = this.del(); 
        var base = this.del(); 
        var resultado = Math.pow(exponente,base);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Realiza el seno del último elemento de la pila 
    */
    seno(){
        var a = this.del(); 
        var resultado = Math.sin(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Realiza el coseno del último elemento de la pila 
    */
    coseno(){
        var a = this.del(); 
        var resultado = Math.cos(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero();  
    }

    /*
    * Realiza la tangente del último elemento de la pila 
    */
    tangente(){
        var a = this.del(); 
        var resultado = Math.tan(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }


    /*
    * Realiza el arcoseno del último elemento de la pila 
    */
    arcoseno(){
        var a = this.del(); 
        var resultado = Math.asin(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero();  
    }

    /*
    * Realiza el arcocoseno del último elemento de la pila 
    */
    arcocoseno(){
        var a = this.del(); 
        var resultado = Math.acos(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Realiza la arcotangente del último elemento de la pila 
    */
    arcotangente(){
        var a = this.del(); 
        var resultado = Math.atan(a);
        this.pila.push(resultado);
        this.mostrarPila(); 
        this.limpiarNumero(); 
    }

    /*
    * Añade la constante PI a la pantalla 
    */
    pi(){
        this.numero += Math.PI;
        this.mostrarNumero(); 
    }

    /*
    * Añade la constante E a la pantalla 
    */
    e(){
        this.numero += Math.E;
        this.mostrarNumero(); 
    }

    /*
    * Limpia la pantalla que representa el número introducido
    */
    limpiarNumero(){  
        this.numero = ""; 
        this.mostrarNumero(); 
    }

    /*
    * Muestra en la pantalla el estado actual de la pila
    */
    mostrarPila(){ 
        var cadenaPila = "<ul>"; 
        var error = false; 
        for (var i in this.pila){
            cadenaPila += "<li>Pila[" + i + "] = " + this.pila[i] + "</li>";
        } 
        cadenaPila += "</ul>"
        document.getElementById("pantalla").innerHTML = cadenaPila;              
    }

    /*
    * Muestra el número introducido
    */
    mostrarNumero(){  
        document.getElementById("numero").value = this.numero;
    }

    /*
    * Introduce un numero en la pila 
    */
    enter(){ 
        this.pila.push(this.numero);
        this.mostrarPila(); 
        this.limpiarNumero();  
    }

}

var calculadora = new CalculadoraRPN(); 