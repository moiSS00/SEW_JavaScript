"use strict";
class Calculadora {
    
    constructor (){
        this.pantalla = ""; //Almacena expresión algrebraica que se irá formando 
        this.memoria = ""; //Representa a la memoria de la calculadora 
    }

    /*
    * Añade un dígito que se le pasa como 
    * parámetro a la pantalla 
    */
    dígitos(digito){ 
        this.pantalla += digito; 
        this.acutalizar(); 
    }

    /*
    * Añade un punto decimal a la pantalla 
    */
    punto(){
        this.pantalla += "."; 
        this.acutalizar();       
    }

    /*
    * Añade el símbolo de suma a la pantalla 
    */
    suma(){ 
        this.pantalla += "+"; 
        this.acutalizar();     
    }

    /*
    * Añade el símbolo de resta a la pantalla 
    */
    resta(){
        this.pantalla += "-"; 
        this.acutalizar();     
    }

    /*
    * Añade el símbolo de multiplicación a la pantalla 
    */
    multiplicación(){
        this.pantalla += "*"; 
        this.acutalizar();      
    }

    /*
    * Añade el símbolo de división a la pantalla 
    */
    división(){
        this.pantalla += "/"; 
        this.acutalizar();     
    }

    /*
    * Añade a la pantalla el valor acumulado en memoria  
    */
    mrc(){ 
        this.pantalla += this.memoria; 
        this.acutalizar(); 
    }

    /*
    * Resta el numero en pantalla a la memoria. En caso, de que sea una operación 
    * lo que hay en pantalla, se evaluará y se restará el resultado obtenido a la memoria 
    */
    mMenos(){ 
        this.igual(); 
        if(this.pantalla.charAt(0) == "-"){ //Menos y menos es más 
            this.memoria += "+" + this.pantalla.substring(1,this.pantalla.length); 
        }
        else{ //Menos y más es menos 
            this.memoria += "-"; 
            this.memoria += this.pantalla;
        }
        try{ //Se controla si no se inserta en memoria nada malicioso
            this.memoria = eval(this.memoria); 
            this.acutalizar();  
        }
        catch{
            document.getElementById("pantalla").value = "Error de sintáxis";
            this.pantalla = ""; 
            this.memoria = ""; 
        }
         
    }

    /*
    * Suma el numero en pantalla a la memoria. En caso, de que sea una operación 
    * lo que hay en pantalla, se evaluará y se sumará el resultado obtenido a la memoria 
    */
    mMas(){
        this.igual();
        this.memoria += "+"; 
        this.memoria += this.pantalla; 
        try{ //Se controla si no se inserta en memoria nada malicioso
            this.memoria = eval(this.memoria); 
            this.acutalizar();  
        }
        catch{
            document.getElementById("pantalla").value = "Error de sintáxis";
            this.pantalla = ""; 
            this.memoria = ""; 
        }
    }

    /*
    * Se limpia la memoria y la pantalla 
    */
    borrar(){ 
       this.pantalla = "";
       this.memoria = "";  
       this.acutalizar(); 
    }

    /*
    * Se realiza la operación escrita en la pantalla con eval 
    */
    igual(){
        try{ //Se prueba a realizar la operación 
            this.pantalla = "" + eval(this.pantalla);
            this.acutalizar();     
        }catch(error){ //En caso de algún error de sintáxis que se haya filtrado 
            document.getElementById("pantalla").value = "Error de sintáxis";
            this.pantalla = ""; 
            this.memoria = ""; 
        }
    }

    /*
    * Actualiza el contenido de la pantalla 
    */
    acutalizar(){ 
        document.getElementById("pantalla").value = this.pantalla;
    }
}

var calculadora = new Calculadora(); 
